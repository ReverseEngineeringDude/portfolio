import React from 'react';

const Chapter01 = () => {
    return (
        <>
            {/* CHAPTER 01: ABOUT ME / DOSSIER */}
<section id="chapter-01" className="chapter chapter-01" data-chapter="01">
    <div className="container">
        <h2 className="section-script-title fade-up">Dossier: About Me</h2>

        <div className="professional-summary fade-up stagger-1">
            <h2 className="section-script-title" style={{ fontSize: '2rem', marginTop: '2rem' }}>The Architect Behind RedByteSec</h2>
            <p className="hand-body" style={{ fontSize: '1.4rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                I am <strong>Praveen MT</strong> (widely known online as <em>ReverseEngineeringDude</em> and <em>RedByteSec</em>), a dedicated Computer Engineering student and Software Engineer from Kozhikode, Kerala. I bridge the gap between low-level system security and high-level application development. Whether I am reverse engineering an Android application, building cross-platform tools with Flutter, or prototyping IoT hardware with ESP32, my focus remains on building intelligent, resilient, and optimized technology.
            </p>
        </div>

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
                        <img src="/praveen1.png" alt="Praveen Photo 1" className="real-photo" />
                    </div>
                </div>
            </div>

            {/* Right Panel: Bio */}
            <div className="panel-right fade-up stagger-3">
                <section className="about-me-extensive">
                    <h3 className="handwritten-heading" style={{ color: '#d11111' }}>Origins & Philosophy</h3>
                    
                    <div className="seo-optimized-article hand-body" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <p>
                            The digital landscape is a complex architecture of protocols, memory allocations, and human logic. As <strong>Praveen MT</strong>, a Computer Engineering student based in Kozhikode, Kerala, my journey into technology didn't start with just writing code—it started with tearing it apart. Operating under the handles <strong>RedByteSec</strong> and <strong>ReverseEngineeringDude</strong>, I have cultivated a deep, fundamental understanding of how software operates beneath the surface. My methodology is rooted in the belief that you cannot truly secure or optimize a system until you understand exactly how it can be dismantled.
                        </p>

                        <p>
                            My technical evolution spans across multiple distinct yet interconnected domains: Cybersecurity, Reverse Engineering, Software Engineering, and Embedded Systems. While traditional developers build applications assuming standard execution environments, my background as a reverse engineering developer in Kerala allows me to view software through an adversarial lens. This unique perspective ensures that the software I engineer is not only functional but inherently resilient against modern security threats.
                        </p>

                        <h4 style={{ color: '#333', marginTop: '2rem', fontFamily: 'var(--font-typewriter)' }}>Mastering Cybersecurity & Reverse Engineering</h4>
                        <p>
                            My core expertise lies in software vulnerability analysis, malware analysis, and binary exploitation. As a cybersecurity student in Kerala, I have spent countless hours dissecting compiled binaries, decompiling Android APKs, and tracing network traffic. Under the alias <strong>ReverseEngineeringDude</strong>, I analyze the internal mechanics of mobile and web applications to identify structural weaknesses. I utilize industry-standard tools like Wireshark, Radare2, Frida, and Ghidra to analyze execution flow, patch binaries, and bypass artificial limitations. 
                        </p>
                        <p>
                            My work in Android reverse engineering has led to the discovery of critical application logic flaws, allowing me to understand how proprietary systems handle authentication, encryption, and local data storage. This meticulous teardown process directly informs my work as a software engineer, teaching me exactly what defensive programming practices are necessary to thwart real-world attacks.
                        </p>

                        <h4 style={{ color: '#333', marginTop: '2rem', fontFamily: 'var(--font-typewriter)' }}>Software Engineering & Cross-Platform Development</h4>
                        <p>
                            Understanding how things break is only half the equation; building them better is the ultimate goal. As a seasoned <strong>Flutter developer in Kerala</strong>, I engineer high-performance, cross-platform applications that deliver native experiences on both mobile and desktop. My expertise in Dart and the Flutter framework allows me to rapidly prototype and deploy complex UI architectures. 
                        </p>
                        <p>
                            One of my flagship projects, <em>Harmony-Music</em>, demonstrates my ability to build automated CI/CD pipelines, parse dynamic APIs, and manage state in a robust production environment. Furthermore, my proficiency in Python development powers my backend architectures and automation scripts. From writing intelligent web scrapers to developing automated security testing tools, Python acts as the glue that binds my front-end applications to my security research.
                        </p>

                        <h4 style={{ color: '#333', marginTop: '2rem', fontFamily: 'var(--font-typewriter)' }}>Hardware Interfacing & Embedded Systems</h4>
                        <p>
                            The perimeter of modern technology extends far beyond software. My fascination with the Internet of Things (IoT) and embedded systems led me to work extensively with ESP32 microcontrollers and hardware-level C/C++ programming. Projects like <em>Blind-assist</em> showcase my ability to integrate hardware sensors with real-time software processing to create tangible, real-world accessibility solutions. 
                        </p>
                        <p>
                            By combining my knowledge of low-level C programming with network security, I analyze how embedded devices communicate, identifying potential interception points in IoT architectures. This holistic understanding of the full technology stack—from the silicon to the cloud—is what defines the <strong>RedByteSec</strong> standard.
                        </p>

                        <h4 style={{ color: '#333', marginTop: '2rem', fontFamily: 'var(--font-typewriter)' }}>Future Trajectory & AI Integration</h4>
                        <p>
                            The next frontier of my research as a Kerala developer involves the intersection of Artificial Intelligence and Cybersecurity. I am actively exploring how machine learning models can be utilized to automate threat detection, generate dynamic binary analysis signatures, and predict software vulnerabilities before they are compiled. 
                        </p>
                        <p>
                            Ultimately, my portfolio is not just a showcase of code—it is a testament to disciplined, fearless engineering. Whether I am competing in Bug Bounty programs, contributing to open-source security tools, or developing enterprise-grade Flutter applications, I remain committed to pushing the boundaries of what is technically possible. I am Praveen MT, the Reverse Engineering Dude, and this is my digital footprint.
                        </p>
                    </div>
                </section>
                <div style={{ marginTop: '2rem' }}>
                    <a href="/Praveen_MT_Resume_2026.pdf" download="Praveen_MT_Resume_2026.pdf" 
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
