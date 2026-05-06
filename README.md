# 🎯 Navodaya's Portfolio

A modern, responsive React-based portfolio showcasing projects, skills, and educational background in Computer Science and emerging technologies.

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Projects](#projects)
- [Skills](#skills)
- [Education](#education)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Build & Deployment](#build--deployment)
- [License](#license)

## About

Hi! I'm Navodaya, a passionate developer and technology enthusiast currently pursuing a Master's degree in Computer Applications. I specialize in:

- **Machine Learning & Deep Learning**: Building intelligent systems and AI models
- **Computer Vision**: Real-time image processing and object detection
- **IoT & Embedded Systems**: Arduino and sensor-based projects
- **Web Development**: Modern React applications
- **Blockchain**: Understanding distributed systems and cryptography
- **Software Engineering**: Full-stack development with C# and .NET

This portfolio showcases my practical projects, technical skills, and academic achievements.

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Project Showcase**: Detailed descriptions of hands-on projects
- **Skills Display**: Complete list of technical competencies
- **Education Section**: Academic qualifications and achievements
- **Certifications**: Professional certifications and course completions
- **Modern UI**: Clean and professional design with smooth interactions

## 🚀 Projects

### 1. **Electrical Hazards Safety System**
- **Description**: Designed an IoT safety system using Arduino UNO, ultrasonic sensors, and relays
- **Features**: Automatic power cut-off logic to protect against electrical hazards
- **Tech Stack**: Arduino, IoT, C++, Electronics
- **Key Learning**: Hardware integration and real-time safety systems

### 2. **Virtual Drawing Pad**
- **Description**: Python OpenCV application for drawing on-screen using hand gestures
- **Features**: Real-time webcam tracking, gesture recognition
- **Tech Stack**: Python, OpenCV, Computer Vision
- **Key Learning**: Real-time image processing and gesture detection

### 3. **Finger Count to Speech System**
- **Description**: Hand gesture recognition tool that counts fingers and converts to speech
- **Features**: Multi-language speech synthesis, real-time gesture detection
- **Tech Stack**: Python, OpenCV, Text-to-Speech APIs
- **Key Learning**: Computer vision and accessibility features

### 4. **Face Recognition Attendance System**
- **Description**: Real-time employee attendance tracker with automated logging
- **Features**: Facial recognition, automated attendance recording, reporting
- **Tech Stack**: Python, OpenCV, Face Recognition Libraries, Database
- **Key Learning**: Production-level computer vision applications

## 💻 Skills

### Programming Languages
- Python
- JavaScript
- C#

### Technical Domains
- **Machine Learning**: Model development and training
- **Deep Learning**: Neural networks and TensorFlow
- **Computer Vision**: OpenCV, image processing, object detection
- **Web Development**: React, responsive design
- **Blockchain**: Fundamentals and smart contracts
- **.NET Framework**: C# and .NET ecosystem

### Tools & Platforms
- Arduino & IoT
- Git & GitHub
- Database Management
- Jupyter Notebooks
- Visual Studio Code

## 🎓 Education

### Amity University Bengaluru
**Master of Computer Application (MCA)**
- Duration: 2024 – Present
- CGPA: 6.4

### KLE's PC Jabin Science College
**B.Sc. in Electronics, Physics and Mathematics**
- Graduated: 2023
- CGPA: 6.8

## 📜 Certifications

- **Swayam Data Analysis with SPSS** (NPTEL)
- **C# and .NET Certification**
- **Cisco Certified Network Associate (CCNA)**

## 🛠️ Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/navodaya-portfolio.git
   cd navodaya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **View in browser**
   - Open [http://localhost:3000](http://localhost:3000)
   - The page will automatically reload as you make changes

## 📖 Usage

### Development
```bash
npm start
```
Runs the app in development mode with hot-reload enabled.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive mode.

### Eject Configuration
```bash
npm run eject
```
**Note**: This is a one-way operation. Only use if you need to customize the build configuration.

## 🔧 Technologies Used

### Frontend Framework
- **React** (v19.2.5): Modern JavaScript library for building user interfaces
- **React DOM** (v19.2.5): Rendering React components to the DOM

### Styling
- **CSS**: Custom stylesheets for responsive design

### Testing
- **@testing-library/react**: React component testing utilities
- **@testing-library/jest-dom**: Jest matchers for DOM elements
- **@testing-library/user-event**: User interaction simulation
- **@testing-library/dom**: DOM testing library

### Build Tools
- **react-scripts** (5.0.1): Configuration and scripts for Create React App
- **web-vitals**: Web performance metrics

### Development Tools
- **ESLint**: Code linting and style checking
- **Jest**: Testing framework (included with react-scripts)

## 🚀 Getting Started

### First Time Setup

1. Clone this repository to your local machine
2. Install dependencies using `npm install`
3. Run `npm start` to launch the development server
4. Start modifying the files in the `src/` folder
5. The browser will automatically refresh with your changes

### Project Structure

```
navodaya-portfolio/
├── public/              # Static files and index.html
├── src/                 # React source code
│   ├── App.js          # Main App component
│   ├── App.css         # App styling
│   ├── App.test.js     # App component tests
│   ├── index.js        # React entry point
│   ├── index.css       # Global styles
│   └── setupTests.js   # Test configuration
├── build/              # Production build output
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

### Customization

To customize this portfolio for your own use:

1. Edit the `projects`, `skills`, `education`, and `certifications` arrays in `src/App.js`
2. Update the personal information and descriptions
3. Customize the styling in `App.css`
4. Add your own sections or components as needed

## 🏗️ Build & Deployment

### Create Production Build
```bash
npm run build
```

This creates a `build/` folder with optimized files ready for deployment.

### Deploy to GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/navodaya-portfolio"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d build",
   "predeploy": "npm run build"
   ```
4. Run `npm run deploy`

### Deploy to Other Platforms
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop your `build/` folder or connect GitHub
- **GitHub Pages**: See instructions above
- **Traditional Hosting**: Upload the `build/` folder to your web server

## 📧 Contact & Social

Feel free to reach out:
- **Email**: [Add your email]
- **LinkedIn**: [Add your LinkedIn]
- **GitHub**: [Add your GitHub profile]
- **Twitter**: [Add your Twitter handle]

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

You are free to use this portfolio as a template for your own portfolio.

## 🤝 Contributing

If you find any issues or have suggestions for improvement, please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Create React App Documentation](https://create-react-app.dev)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)

## ⭐ Show Your Support

If you liked this portfolio template, please consider giving it a star on GitHub! It helps others discover the project.

---

**Last Updated**: May 2026

Made with ❤️ by Navodaya

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
