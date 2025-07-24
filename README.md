# Andrew Bazen - Portfolio Website

Welcome to my personal portfolio website! This is a modern, responsive React application showcasing my skills, projects, and professional experience.

## 🌟 Live Site

Visit my portfolio at: [https://AndrewBazen.github.io](https://AndrewBazen.github.io)

## 🚀 Features

- **Modern React Application** - Built with React 19 and modern JavaScript
- **Responsive Design** - Optimized for all devices and screen sizes
- **Fast Performance** - Optimized build with code splitting and compression
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **GitHub Pages Deployment** - Automated deployment via GitHub Actions
- **Security First** - All dependencies updated with latest security patches

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Create React App (react-scripts 5.0.1)
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Package Manager:** npm
- **Styling:** CSS3 with modern features

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 20 or higher)
- npm (comes with Node.js)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/AndrewBazen/AndrewBazen.github.io.git
   cd AndrewBazen.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Trigger:** Pushes to the `main` branch
2. **Build:** Runs `npm ci` and `npm run build`
3. **Deploy:** Uploads the build artifacts to GitHub Pages

### Manual Deployment
If you need to deploy manually:
```bash
npm run deploy
```

## 📁 Project Structure

```
AndrewBazen.github.io/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # Site favicon
│   └── manifest.json      # PWA manifest
├── src/                   # Source code
│   ├── App.js            # Main React component
│   ├── App.css           # Main styles
│   ├── index.js          # App entry point
│   └── index.css         # Global styles
├── .github/workflows/     # GitHub Actions
│   └── pages.yml         # Deployment workflow
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)
- `npm run deploy` - Builds and deploys to GitHub Pages

## 🛡️ Security

This project maintains high security standards:
- All dependencies are regularly updated
- Security vulnerabilities are automatically patched via npm overrides
- Latest security patches applied to all packages

## 🤝 Contributing

This is my personal portfolio site, but if you find any issues or have suggestions, feel free to:
1. Open an issue on GitHub
2. Fork the repository
3. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **GitHub:** [@AndrewBazen](https://github.com/AndrewBazen)
- **Portfolio:** [https://AndrewBazen.github.io](https://AndrewBazen.github.io)

---

*Built with ❤️ using React and modern web technologies*
