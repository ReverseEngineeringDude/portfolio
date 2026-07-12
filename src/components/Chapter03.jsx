import React from 'react';

const Chapter03 = () => {
    return (
        <>
            {/* CHAPTER 03: TECH STACK & ARSENAL */}
<section id="chapter-03" className="chapter chapter-03" data-chapter="03">
    <div className="container">
        <h2 className="section-script-title fade-up">Tech Stack & Arsenal</h2>
        
        <div className="technical-expertise-section fade-up" style={{ marginTop: '2rem' }}>
            <h3 className="section-script-title" style={{ fontSize: '1.8rem', color: '#333' }}>Technical Arsenal & Research Focus</h3>
            <ul className="hacker-list" style={{ fontFamily: 'var(--font-typewriter)', color: '#444', fontSize: '1.2rem', lineHeight: '1.8' }}>
                <li><strong>Cybersecurity & Penetration Testing:</strong> Web Application Security, Network Sniffing (Wireshark), Bug Bounty Hunting.</li>
                <li><strong>Reverse Engineering:</strong> Android APK Decompilation, Smali Patching, Binary Analysis (Radare2, Frida), DRM Bypassing.</li>
                <li><strong>Software Development:</strong> Cross-platform mobile/desktop apps (Flutter/Dart), Backend automation (Python), Web Architecture (React, Vite).</li>
                <li><strong>Embedded Systems:</strong> IoT Architecture, ESP32 Microcontrollers, C/C++ Hardware Interfacing.</li>
                <li><strong>Infrastructure & AI:</strong> CI/CD Pipelines (GitHub Actions), AI Application Integration, Firebase Architecture.</li>
            </ul>
        </div>

        <div className="collage-layout" style={{'minHeight': 'auto', 'gap': '3rem', 'marginTop': '4rem'}}>
            
            {/* Column 1: Programming Languages */}
            <div className="sketch-panel fade-up stagger-1" style={{'background': 'rgba(255,255,255,0.4)'}}>
                <h3 className="handwritten-heading" style={{'color': '#d11111', 'borderBottom': '2px dashed #666', 'paddingBottom': '0.5rem'}}>Languages</h3>
                <ul className="typewriter-list" style={{'marginTop': '1.5rem', 'fontSize': '1.2rem'}}>
                    <li>Python</li>
                    <li>Dart</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>PHP</li>
                    <li>Bash</li>
                    <li>Lua</li>
                    <li>Assembly (Basics)</li>
                </ul>
            </div>

            {/* Column 2: Technologies & Tools */}
            <div className="sketch-panel fade-up stagger-2" style={{'background': 'rgba(255,255,255,0.4)'}}>
                <h3 className="handwritten-heading" style={{'color': '#d11111', 'borderBottom': '2px dashed #666', 'paddingBottom': '0.5rem'}}>Frameworks & Tools</h3>
                <ul className="typewriter-list" style={{'marginTop': '1.5rem', 'fontSize': '1.2rem'}}>
                    <li>Flutter</li>
                    <li>Firebase</li>
                    <li>Django</li>
                    <li>Streamlit</li>
                    <li>Linux</li>
                    <li>Git & GitHub</li>
                    <li>Radare2</li>
                    <li>Wireshark</li>
                    <li>ESP32</li>
                    <li>Three.js</li>
                </ul>
            </div>

            {/* Column 3: Areas of Interest */}
            <div className="sketch-panel fade-up stagger-3" style={{'background': 'rgba(255,255,255,0.4)'}}>
                <h3 className="handwritten-heading" style={{'color': '#d11111', 'borderBottom': '2px dashed #666', 'paddingBottom': '0.5rem'}}>Fields of Expertise</h3>
                <ul className="typewriter-list" style={{'marginTop': '1.5rem', 'fontSize': '1.2rem'}}>
                    <li>Cybersecurity</li>
                    <li>Reverse Engineering</li>
                    <li>AI Applications</li>
                    <li>Embedded Systems</li>
                    <li>Automation</li>
                    <li>Modern UI/UX</li>
                    <li>Networking</li>
                    <li>Full-Stack Development</li>
                </ul>
            </div>
            
        </div>
    </div>
</section>

        </>
    );
};

export default Chapter03;
