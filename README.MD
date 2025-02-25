# Fast Folders Landing Page

This repository contains the source code for the landing page of Fast Folders, a Chrome extension designed to help you organize your Google Gemini chats into folders.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Website URL](#website-url)

## Introduction

The Fast Folders landing page serves as the primary online presence for the Fast Folders Chrome extension. It provides information about the extension's features, benefits, and how to install it. The landing page is designed to be visually appealing, informative, and easy to navigate.

## Features

- **Hero Section:** A prominent section that introduces Fast Folders and its core value proposition.
- **Feature Highlights:** Sections showcasing the key features of the Chrome extension with descriptions and visuals.
- **Call-to-Action:** Clear and persuasive calls to action that encourage visitors to install the extension.
- **FAQ Section:** An expandable section that answers frequently asked questions about Fast Folders.
- **Footer:** Contains links to important resources, copyright information, and social media links.
- **Responsive Design:** The landing page is fully responsive and adapts to different screen sizes and devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool and development server for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapidly styling HTML elements.
- **Lucide React:** A library of beautiful and consistent icons for React applications.
- **JavaScript (ES6+):** The primary programming language for building the landing page.

## Project Structure

The project structure is organized as follows:

```
fast-folders-lp2/
├── src/
│   ├── components/        # React components
│   │   ├── Footer.jsx       # Footer component
│   │   ├── HeroSection.jsx  # Hero section component
│   │   └── ...            # Other components
│   ├── styles/            # CSS styles
│   │   ├── index.css      # Main CSS file with Tailwind directives
│   │   └── ...            # Other CSS files
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for the React application
│   └── index.html         # HTML entry point
├── public/             # Static assets (e.g., images)
├── vite.config.js       # Vite configuration file
├── postcss.config.cjs   # PostCSS configuration file
├── tailwind.config.js   # Tailwind CSS configuration file
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```

## Getting Started

Follow these steps to set up the development environment and run the landing page locally.

### Prerequisites

- **Node.js:** Ensure that Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
- **npm:** Node Package Manager (npm) is included with Node.js.

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd fast-folders-lp2
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

This will start the Vite development server, and you can view the landing page in your browser at `http://localhost:5173/` (or the address provided by Vite).

### Building for Production

To build the landing page for production, use the following command:

```bash
npm run build
```

This will generate an optimized build of the landing page in the `dist` directory.

## Deployment

The landing page can be deployed to various hosting platforms, such as:

- **Vercel:** A cloud platform for static sites and serverless functions.
- **Netlify:** A web hosting platform for static sites.
- **GitHub Pages:** A static site hosting service provided by GitHub.
- **Render:** A unified platform to build and run all your apps and websites.

To deploy to Render, connect your GitHub repository to Render and configure the build command and publish directory.


## License

This project is licensed under the [MIT License](LICENSE).

## Website URL

You can view the live website at:

[https://fast-folders.onrender.com](https://fast-folders.onrender.com)