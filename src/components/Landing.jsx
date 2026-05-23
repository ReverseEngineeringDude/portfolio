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
