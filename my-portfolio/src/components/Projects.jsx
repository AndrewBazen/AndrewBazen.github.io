
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'StackScribe: AI-Powered Note Taking App',
    image: 'https://github.com/AndrewBazen/AndrewBazen.github.io/blob/main/my-portfolio/src/images/StackScribe.png?raw=true',
    desc: 'Cross-platform note taking app with built-in markdown editor and AI-powered plugins for software development and documentation.',
    link: 'https://github.com/AndrewBazen/StackScribe',
    tech: ['Rust', 'Typescript', 'React', 'Tauri', 'Markdown'],
    featured: true,
  },
  {
    title: 'CodeChat: Azure Hosted Blazor Chat App',
    image: 'https://github.com/mssa-ccad18/CodeAvengers/blob/main/Projects/CodeChat/images/CodeChat.png?raw=true',
    desc: 'Blazor chat app with secure chatrooms and SignalR.',
    link: 'https://github.com/mssa-ccad18/CodeAvengers/tree/main/Projects/CodeChat/CodeChat',
    tech: ['C#', '.NET 8', 'Blazor', 'AI', 'Azure', 'SignalR'],
    featured: false,
  },
 
  {
    title: 'StackScribe-AI: AI-Powered Plugin for StackScribe',
    image: 'https://github.com/AndrewBazen/stackscrib-ai/blob/main/images/stackscrib-ai.png?raw=true',
    desc: 'Custom AI plugin for automated note links and backlinks.',
    link: 'https://github.com/AndrewBazen/stackscrib-ai',
    tech: ['Python', 'Docker', 'Ollama', 'Qdrant'],
    featured: false,
  },
  {
    title: 'Mage: Rust-based shell-scripting language',
    image: 'https://github.com/AndrewBazen/mage/blob/main/mage.png?raw=true',
    desc: 'Rust-based shell-scripting language with a focus on automation and productivity with a fantasy theme.',
    link: 'https://github.com/AndrewBazen/mage',
    tech: ['Rust'],
    featured: false,
  },
  {
    title: 'PocketSprite: Cross-platform Pixel Art Editor',
    image: 'https://github.com/AndrewBazen/PocketSprite/blob/main/PocketSprite.png?raw=true',
    desc: 'Cross-platform pixel art editor built on .NET MAUI and SkiaSharp.',
    link: 'https://github.com/AndrewBazen/PocketSprite',
    tech: ['C#', '.NET 8', '.NET MAUI', 'SkiaSharp'],
    featured: false,
  },
  {
    title: 'DiceRoller: Avalonia App for Dice Rolling',
    image: 'https://github.com/AndrewBazen/DiceRoller/blob/main/DiceRoller.png?raw=true',
    desc: 'Avalonia app for rolling virtual dice with a focus on simplicity and ease of use.',
    link: 'https://github.com/AndrewBazen/DiceRoller',
    tech: ['C#', '.NET 8', 'Avalonia'],
    featured: false,
  },
  {
    title: 'CS469 Group Project: Three-tiered client-server CLI',
    image: 'https://github.com/AndrewBazen/CS469-Group-Project/blob/main/CS469%20Group%20Project.png?raw=true',
    desc: 'Three-tiered client-server CLI with built in OpenSSL encryption for secure .',
    link: 'https://github.com/AndrewBazen/CS469-Group-Project',
    tech: ['C#', '.NET 8', 'CLI'],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building scalable solutions with modern technologies and best practices
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-200 ease-out hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 group ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-xl mb-4" />
              {project.featured && (
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Featured
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 ">
                {project.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-mono hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-150 ease-out hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-150 ease-out font-medium hover:gap-3"
              >
                View Code
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="https://github.com/AndrewBazen"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-medium transition-all duration-200 ease-out hover:bg-blue-500 hover:text-white hover:scale-105 inline-flex items-center gap-2"
          >
            View All Projects
            <svg className="w-4 h-4 transition-transform duration-150 ease-out hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}