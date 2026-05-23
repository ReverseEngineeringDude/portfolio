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
                <div style={{ marginTop: '2rem' }}>
                    <a href="/portfolio/Praveen_MT_Resume_2026.pdf" download="Praveen_MT_Resume_2026.pdf" 
                       style={{
                           display: 'inline-block',
                           padding: '0.8rem 1.5rem',
                           border: '2px solid #d11111',
                           background: 'rgba(209, 17, 17, 0.1)',
                           color: '#d11111',
                           fontFamily: 'var(--font-typewriter)',
                           fontWeight: 'bold',
                           textDecoration: 'none',
                           borderRadius: '4px',
                           boxShadow: '4px 4px 0px rgba(209, 17, 17, 1)',
                           transition: 'all 0.3s ease'
                       }}
                       onMouseOver={(e) => {
                           e.currentTarget.style.transform = 'translate(-2px, -2px)';
                           e.currentTarget.style.boxShadow = '6px 6px 0px rgba(209, 17, 17, 1)';
                           e.currentTarget.style.background = '#d11111';
                           e.currentTarget.style.color = '#fff';
                       }}
                       onMouseOut={(e) => {
                           e.currentTarget.style.transform = 'none';
                           e.currentTarget.style.boxShadow = '4px 4px 0px rgba(209, 17, 17, 1)';
                           e.currentTarget.style.background = 'rgba(209, 17, 17, 0.1)';
                           e.currentTarget.style.color = '#d11111';
                       }}
                    >
                        <i className="fa-solid fa-file-arrow-down" style={{ marginRight: '8px' }}></i>
                        EXTRACT_RESUME
                    </a>
                </div>
            </div>
        </div>

        {/* Skills Section */}
        <h2 className="section-script-title fade-up" style={{'marginTop': '5rem'}}>Core Skills & Arsenal</h2>
        <div className="skills-grid">
            <div className="gear-card fade-up stagger-1">
                <div className="gear-sketch" style={{'marginBottom': '1rem'}}><i className="fa-solid fa-shield-halved" style={{ fontSize: '3.5rem', color: '#333' }}></i></div>
                <p className="hand-label" style={{'fontSize': '1.8rem', 'color': '#d11111', 'fontWeight': 'bold'}}>Cybersecurity</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.1rem', 'marginTop': '0.8rem', 'lineHeight': '1.4'}}>Reverse Eng, Wireshark, Radare2</p>
            </div>
            <div className="gear-card fade-up stagger-2">
                <div className="gear-sketch" style={{'marginBottom': '1rem'}}><i className="fa-solid fa-mobile-screen-button" style={{ fontSize: '3.5rem', color: '#333' }}></i></div>
                <p className="hand-label" style={{'fontSize': '1.8rem', 'color': '#d11111', 'fontWeight': 'bold'}}>App Dev</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.1rem', 'marginTop': '0.8rem', 'lineHeight': '1.4'}}>Flutter, Dart, Firebase</p>
            </div>
            <div className="gear-card fade-up stagger-3">
                <div className="gear-sketch" style={{'marginBottom': '1rem'}}><i className="fa-solid fa-laptop-code" style={{ fontSize: '3.5rem', color: '#333' }}></i></div>
                <p className="hand-label" style={{'fontSize': '1.8rem', 'color': '#d11111', 'fontWeight': 'bold'}}>Web Tech</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.1rem', 'marginTop': '0.8rem', 'lineHeight': '1.4'}}>Python, Django, JS, Streamlit</p>
            </div>
            <div className="gear-card fade-up stagger-4">
                <div className="gear-sketch" style={{'marginBottom': '1rem'}}><i className="fa-solid fa-microchip" style={{ fontSize: '3.5rem', color: '#333' }}></i></div>
                <p className="hand-label" style={{'fontSize': '1.8rem', 'color': '#d11111', 'fontWeight': 'bold'}}>Hardware & AI</p>
                <p style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.1rem', 'marginTop': '0.8rem', 'lineHeight': '1.4'}}>ESP32, IoT, AI Automation</p>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default Chapter01;
