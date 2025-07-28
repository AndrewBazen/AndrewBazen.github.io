---
title: "Building StackScribe: A Cross-Platform Note-Taking App"
excerpt: Exploring the challenges and solutions in creating a modern note-taking application using Rust, Tauri, and React
date: 2025-07-28
readTime: 5 min read
tags:
  - Rust
  - Tauri
  - React
  - Desktop
  - Apps
featured: true
image: https://github.com/AndrewBazen/AndrewBazen.github.io/blob/main/my-portfolio/src/images/StackScribe.png?raw=true
author: Andrew Bazen
---
# The Why
I have had this idea in my mind for some time, but I would say that it probably entered my mind around the time that I was taking my first masters course on software engineering (SWE).  I feel that there is a lot of room for improvement when it comes to development workflows.  

For me there are _two_ main pain points when it comes to development.

- **Context Switching** - I find that switching from my IDE to my notes application _breaks_ my workflow
    
- **Documentation Debt** - Code changes fast, and sometimes those changes can stack up before I have had the chance to actually document them

StackScribe is my solution to these problems. 

# What it is
**StackScribe** is designed to be a _living archive_ for software development—an intelligent, contextual documentation tool that exists _alongside_ your code, not separate from it. Unlike traditional note-taking apps that require manual effort and context switching, StackScribe integrates directly with your development environment to stay in sync with your workflow.

At its core, StackScribe bridges the gap between documentation and execution. It’s built to:

- **Embed into IDEs** to capture thoughts, decisions, and documentation _as you code_
    
- **Integrate with CI/CD pipelines** to monitor and reflect changes in codebases automatically
    
- **Track the evolution of features**, not just the code, providing historical insight into _why_ things changed—not just _how_
    
- **Supercharge project documentation**, making your `README.md` look like a static relic from a more primitive time
    

Instead of treating documentation as a chore you do _after the fact_, StackScribe aims to make it a natural part of the development process—lightweight, contextual, and version-aware.

# Tech Stack
I wanted the application to be cross-platform and focus on local-first development, a lightweight footprint, and performance. To do so, I employed the current tech stack:

### Core
- **Tauri v2** - secure and lightweight native desktop application shell
- **Rust** - Backend powerhouse for ensure control of performance, safety, and concurrency.
- **React + TypeScript** - Modern, maintainable frontend with strong typing and community support

### Data
- **SQLite** - Lightweight, embedded database for fast offline-first local storage.

### AI 
- **Qdrant** - Vector-based link suggestions and semantic search across entries.
- **Docker** - (Currently local) Containerization for AI based services.

### Roadmap

Below is a high-level roadmap broken into key phases:

#### Phase 1 – Core MVP (Complete)
_Goal: Build a functional, local-first note-taking app tailored for developers._
- Markdown editor with live preview using CodeMirror 6
- SQLite local archive system
- Custom UI using React, Radix-UI, and Tauri desktop
- Basic AI integration
- Local semantic search with Qdrant

#### Phase 2 - IDE integration
_Goal: Reduce context switching and make documentation part of daily dev workflows._
- VS Code extension for in-IDE entry creation and AI suggestions
- CLI tool for entry binding to Git commits/branches
- Git hook integration for commit summary and diff capture
- Auto-link notes to relevant files or functions

#### Phase 3 - Advanced AI Feature Integration
_Goal: Enable optional seamless multi-device access with secure user authentication._
- Cloud database with Rust-based Sync API
- Entra ID B2C integration for authentication
- Auto-generation of SDLC documents and changelogs

#### Phase 4 - Open Source Ecosystem
_Goal: Encourage community growth and extensibility_
- Plugin API for user-generated extensions
- Community plugin hub for custom integrations and AI tooling
- CLI enhancements and headless support
- Export and sync to external tools