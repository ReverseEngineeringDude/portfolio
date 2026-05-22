import React from 'react';

const Chapter05 = () => {
    return (
        <>
            {/* CHAPTER 05: CONTACT / FOOTER */}
<section id="chapter-05" className="chapter chapter-05" data-chapter="05">
    <div className="container final-scene fade-up">
        <h2 className="script-title small" style={{textAlign: 'center'}}>Connect</h2>

        <p className="hand-body" style={{'fontSize': '1.5rem', 'textAlign': 'center', 'marginBottom': '3rem'}}>
            Establish a secure connection via the following channels.
        </p>

        <div
            style={{'display': 'flex', 'flexWrap': 'wrap', 'gap': '2rem', 'justifyContent': 'center', 'maxWidth': '800px', 'margin': '0 auto', 'marginBottom': '5rem'}}>

            <a href="https://github.com/ReverseEngineeringDude" target="_blank" className="social-icon-btn" title="GitHub">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/redbytesec/" target="_blank" className="social-icon-btn" title="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://x.com/RedByteSec" target="_blank" className="social-icon-btn" title="X (Twitter)">
                <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="https://t.me/ReverseEngineeringDude" target="_blank" className="social-icon-btn" title="Telegram">
                <i className="fa-brands fa-telegram"></i>
            </a>

            <a href="https://www.instagram.com/Red_Byte.Sec/" target="_blank" className="social-icon-btn" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.facebook.com/RedByte.Sec" target="_blank" className="social-icon-btn" title="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://www.reddit.com/user/RedByteSec/" target="_blank" className="social-icon-btn" title="Reddit">
                <i className="fa-brands fa-reddit-alien"></i>
            </a>

            {/* Custom typography icons for platforms without FA logos */}
            <a href="https://hackerone.com/ReverseEngineeringDude" target="_blank" className="social-icon-btn"
                title="HackerOne" style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.2rem', 'fontWeight': 'bold'}}>
                H1
            </a>

            <a href="https://bugcrowd.com/ReverseEngineeringDude" target="_blank" className="social-icon-btn"
                title="Bugcrowd" style={{'fontFamily': 'var(--font-typewriter)', 'fontSize': '1.2rem', 'fontWeight': 'bold'}}>
                BC
            </a>

        </div>
    </div>
</section>
        </>
    );
};

export default Chapter05;
