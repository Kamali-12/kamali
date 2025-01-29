import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <div class="logo">My Portfolio</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section id="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate developer eager to bring your ideas to life.</p>
    </section>

    <section id="about">
        <h2>About Me</h2>
        <p>Hello! I am [Your Name], a [Your Role, e.g., Web Developer] based in [Your Location]. I love creating innovative solutions and exploring new technologies.</p>
    </section>

    <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <h3>Project 1</h3>
            <p>Brief description of your first project.</p>
        </div>
        <div class="project">
            <h3>Project 2</h3>
            <p>Brief description of your second project.</p>
        </div>
    </section>

    <section id="skills">
        <h2>Skills</h2>
        <ul class="skills-list">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
        </ul>
    </section>

    <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>Phone: +1 234 567 890</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
    </section>

    <footer>
        <p>© 2025 My Portfolio. All rights reserved.</p>
    </footer>
</body>
</html>
    </>
  )
}

export default App
