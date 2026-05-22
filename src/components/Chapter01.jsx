import React from 'react';

const Chapter01 = () => {
    return (
        <>
            {/* CHAPTER 01: ABOUT ME / DOSSIER */}
<section id="chapter-01" className="chapter chapter-01" data-chapter="01">
    <div className="container">
        <h2 className="section-script-title fade-up">Dossier: About Me</h2>

        <div className="split-panel">
            {/* Left Panel: Hacker Data + Photo */}
            <div className="panel-left fade-up stagger-1" style={{'flex': '1.2', 'alignItems': 'flex-start'}}>
                <div style={{'display': 'flex', 'flexDirection': 'column', 'gap': '2rem'}}>
                    <div className="sketch-box"
                        style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.1rem', 'lineHeight': '1.6', 'background': 'rgba(255,255,255,0.3)'}}>
                        <strong style={{'fontSize': '1.4rem'}}>Name:</strong> Praveen MT<br />
                        <strong style={{'fontSize': '1.4rem'}}>Location:</strong> Kozhikode, Kerala<br />
                        <strong style={{'fontSize': '1.4rem'}}>Role:</strong> Computer Eng. Student | Security
                        Enthusiast<br />
                        <br />
                        <strong style={{'fontSize': '1.4rem'}}>Mindset:</strong> Build. Break. Learn. Optimize.<br />
                        <strong style={{'fontSize': '1.4rem'}}>Goal:</strong> Becoming a world-class software & security
                        engineer.<br />
                    </div>
                    <div className="torn-paper-note fade-up stagger-2"
                        style={{'position': 'relative', 'right': '0', 'top': '0', 'transform': 'rotate(-2deg)', 'alignSelf': 'flex-start', 'padding': '1rem 1.5rem', 'marginTop': '1rem'}}>
                        <p style={{'margin': '0', 'fontSize': '1.5rem'}}>"Engineering systems beyond the surface."</p>
                    </div>
                </div>

                <div className="polaroid p-1 fade-up stagger-2"
                    style={{'transform': 'rotate(5deg)', 'boxShadow': '2px 5px 15px rgba(0,0,0,0.4)'}}>
                    <div className="photo-placeholder">
                        <img src="/portfolio/praveen1.png" alt="Praveen Photo 1" className="real-photo" />
                    </div>
                </div>
            </div>

            {/* Right Panel: Bio */}
            <div className="panel-right fade-up stagger-3">
                <p className="hand-body" style={{'fontSize': '1.6rem', 'marginBottom': '2rem'}}>
                    I’m a Computer Engineering student passionate about building technology that is practical,
                    intelligent, and optimized for real-world use.<br /><br />
                    My interests span across software development, cybersecurity, reverse engineering, embedded systems,
                    AI, and modern web technologies. I enjoy understanding how systems work internally — from low-level
                    binaries and network behavior to scalable applications and interactive user experiences.
                </p>
            </div>
        </div>

        {/* Skills Section */}
        <h2 className="section-script-title fade-up" style={{'marginTop': '5rem'}}>Core Skills & Arsenal</h2>
        <div className="skills-grid">
            <div className="gear-card fade-up stagger-1">
                <div className="gear-sketch" style={{'fontSize': '3rem', 'marginBottom': '0.5rem'}}>🛡️</div>
                <p className="hand-label" style={{'fontSize': '1.5rem'}}>Cybersecurity</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1rem', 'marginTop': '0.5rem'}}>Reverse Eng,
                    Wireshark, Radare2</p>
            </div>
            <div className="gear-card fade-up stagger-2">
                <div className="gear-sketch" style={{'fontSize': '3rem', 'marginBottom': '0.5rem'}}>📱</div>
                <p className="hand-label" style={{'fontSize': '1.5rem'}}>App Dev</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1rem', 'marginTop': '0.5rem'}}>Flutter, Dart,
                    Firebase</p>
            </div>
            <div className="gear-card fade-up stagger-3">
                <div className="gear-sketch" style={{'fontSize': '3rem', 'marginBottom': '0.5rem'}}>💻</div>
                <p className="hand-label" style={{'fontSize': '1.5rem'}}>Web Tech</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1rem', 'marginTop': '0.5rem'}}>Python, Django, JS,
                    Streamlit</p>
            </div>
            <div className="gear-card fade-up stagger-4">
                <div className="gear-sketch" style={{'fontSize': '3rem', 'marginBottom': '0.5rem'}}>⚡</div>
                <p className="hand-label" style={{'fontSize': '1.5rem'}}>Hardware & AI</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1rem', 'marginTop': '0.5rem'}}>ESP32, IoT, AI
                    Automation</p>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default Chapter01;
