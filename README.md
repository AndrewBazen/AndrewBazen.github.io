# Andrew Bazen - Portfolio Website

This repository contains my personal portfolio website built with React, Vite, and Tailwind CSS.

## Project Structure

```
AndrewBazen.github.io/
├── .github/workflows/pages.yml    # GitHub Actions deployment
├── my-portfolio/                  # Main React application
│   ├── src/                      # Source code
│   ├── public/                   # Static assets
│   ├── dist/                     # Build output (generated)
│   └── package.json             # Dependencies and scripts
└── README.md                    # This file
```

## GitHub Pages Setup

The site is deployed to GitHub Pages using GitHub Actions. The workflow:

1. Builds the React app in the `my-portfolio` directory
2. Uploads the `dist` folder as a Pages artifact
3. Deploys to GitHub Pages

## Local Development

To run the site locally:

```bash
cd my-portfolio
npm install
npm run dev
```

## Build

To build for production:

```bash
cd my-portfolio
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## Contact

- GitHub: [@AndrewBazen](https://github.com/AndrewBazen)
- Portfolio: [andrewbazen.github.io](https://andrewbazen.github.io) 