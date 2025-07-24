// Custom frontmatter parser for browser compatibility
function parseFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);
  
  if (!match) {
    return {
      attributes: {},
      body: content
    };
  }
  
  const [, frontMatter, body] = match;
  const attributes = {};
  
  // Parse YAML-like frontmatter
  const lines = frontMatter.split('\n');
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Parse arrays (simple format: ["item1", "item2"])
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch {
          // If JSON parsing fails, treat as string
        }
      }
      
      // Parse booleans
      if (value === 'true') value = true;
      else if (value === 'false') value = false;
      
      attributes[key] = value;
    }
  }
  
  return { attributes, body };
}

// Import all markdown files from the posts directory as raw text
const postFiles = import.meta.glob('../posts/*.md', { 
  eager: true,
  query: '?raw',
  import: 'default'
});

export function getAllPosts() {
  const posts = [];
  
  for (const path in postFiles) {
    const content = postFiles[path];
    const slug = path.replace('../posts/', '').replace('.md', '');
    
    // Parse the frontmatter and content
    const { attributes, body } = parseFrontMatter(content);
    
    posts.push({
      slug,
      ...attributes,
      content: body,
      id: parseInt(slug.split('-')[0]) || posts.length + 1
    });
  }
  
  // Sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}

export function getFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter(post => post.featured);
}

export function getNonFeaturedPosts() {
  const posts = getAllPosts();
  return posts.filter(post => !post.featured);
} 