import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.card, .section');
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, []);

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>Krishnapriya N</h1>
                    <p>Java | Robotics | Python | JavaScript</p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn">View My Work</Link>
                        <Link to="/about" className="btn btn-secondary">About Me</Link>
                        <a 
                            href="/static/resume.pdf" 
                            download="Krishnapriya-N-Resume.pdf" 
                            className="btn btn-resume"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <div className="container">
                    <h2>What I Do</h2>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon">🧠</div>
                            <h3>Robotics</h3>
                            <p>ArduinoIDE, TinkerCad, Circuit Design</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🐍</div>
                            <h3>Python Engineering</h3>
                            <p>Clean Code, Problem Solving</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🚀</div>
                            <h3>Java</h3>
                            <p>Object-Oriented Programming, Java Collections, Documentation</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🗄️</div>
                            <h3>JavaScript</h3>
                            <p>React, Node.js, Express, HTML/CSS, Responsive Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

