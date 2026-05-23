import React from 'react';

const Landing = () => {
    return (
        <>
            {/* CHAPTER 00: HERO SHEET (LANDING COMPONENT) */}
            <section id="chapter-00" className="chapter hero-section" data-chapter="00">
                <div className="dynamic-hero-wrapper">
                    <div className="parallax-bg-wrapper">
                        <img src="/portfolio/praveen_landscape_background.png" alt="Landing Background" className="hero-bg" />
                    </div>
                    <div className="parallax-fg-wrapper fade-up">
                        <img src="/portfolio/praveen_landscape_foreground.png" alt="Praveen MT Foreground" className="hero-fg" />
                    </div>
                </div>

                <div className="container collage-layout overlay-layer">

                    {/* Main Title Area */}
                    <div className="title-area fade-up">
                        <h1 className="script-title">Praveen MT</h1>
                        <p className="typewriter-sub">FOCUSED. DISCIPLINED. FEARLESS.</p>
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

                    {/* Torn Paper Note */}
                    <div className="torn-paper-note fade-up stagger-3">
                        <p>"Silence is not absence. It's preparation."</p>
                    </div>

                </div>
            </section>

        </>
    );
};

export default Landing;
