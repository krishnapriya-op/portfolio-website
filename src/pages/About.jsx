import React from 'react'
import '../styles/About.css'
import profileImage from '../../static/profile.png'
import resumeFile from '../../static/resume.pdf'

const About = () => {
    return (
        <div className="container">
            <div className="section">
                <h1>About Me</h1>
                
                <div className="about-content">
                    <div className="about-text">
                        <p>Hello! I'm an enthusiastic student with a strong interest in real-world projects, hardware and software development.</p> 
                        
                        <p>My experience spans building robots from scratch, leetcode problem solving, hackathons and I love diving deep into technical challenges and delivering well-engineered solutions.</p> 
                        
                        <p>Outside of core development, I actively follow advancements in AI research, contribute to open source, and enjoy breaking down complex topics through technical writing and experimentation. I'm a firm believer in continuous learning, collaboration, and building tools that empower others.</p>

                        <div style={{ marginTop: '2rem' }}>
                            <a 
                                href={resumeFile} 
                                download="Krishnapriya-N-Resume.pdf" 
                                className="btn btn-resume"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                    
                    <div className="about-image">
                        <div className="profile-pic">
                            <img src={profileImage} alt="Krishnapriya N" className="profile-image" />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2>Technical Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>AI & ML</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">Pandas</span>
                                <span className="skill-tag">NumPy</span>
                                <span className="skill-tag">Scikit-learn</span>
                                <span className="skill-tag">RandomForest</span>
                                <span className="skill-tag">SVM</span>
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Frontend Development</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">JavaScript</span>
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">HTML/CSS</span>
                            </div>
                        </div>
                    
                        <div className="skill-category">
                            <h3>IOT & Robotics</h3>
                            <div className="skill-tags">
                                <span className="skill-tag">ArduinoIDE</span>
                                <span className="skill-tag">TinkerCad</span>
                                <span className="skill-tag">Circuit Design</span>
                                <span className="skill-tag">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience-section">
                    <h2>Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2025 - Now</div>
                                <div className="timeline-title">Bachelor of Technology</div>
                                <div className="timeline-company">Jain Deemed-to-be University</div>
                                <div className="timeline-description">
                                    Currently pursuing the BTech degree in Computer Science and Engineering (Artificial Intelligence & Machine Learning). Focused on software development, algorithms, and data structures.
                                </div>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">2024 - 2025</div>
                                <div className="timeline-title">Bachelor of Science</div>
                                <div className="timeline-company">IIT Madras</div>
                                <div className="timeline-description">
                                    Took the foundation courses for the BS in Data Science and Applications and had a GPA of 9.0
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="contact-section">
                    <h2>Let's Connect</h2>
                    <p style={{ color: '#cccccc', marginBottom: '2rem' }}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </p>
                    <div className="contact-links">
                        <a href="mailto:krishnapriyaclg@gmail.com" className="contact-link">
                            Email
                        </a>
                        <a href="https://linkedin.com/in/kpriya666" target="_blank" rel="noopener noreferrer" className="contact-link">
                            LinkedIn
                        </a>
                        <a href="https://github.com/krishnapriya-op" target="_blank" rel="noopener noreferrer" className="contact-link">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

