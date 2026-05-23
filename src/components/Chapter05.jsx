import React from 'react';

const Chapter05 = () => {
    return (
        <>
            {/* CHAPTER 05: CONTACT / FOOTER */}
<section id="chapter-05" className="chapter chapter-05" data-chapter="05">
    <div className="container final-scene fade-up">
        <h2 className="script-title small" style={{textAlign: 'center'}}>Connect</h2>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="typewriter-sub" style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#d11111' }}>
                // OPEN TO INTERNSHIPS & COLLABORATIONS
            </p>
            <p className="hand-body" style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#555' }}>
                Whether you have an opportunity, a question, or just want to talk about security, my inbox is always open. Establish a secure connection via the channels below.
            </p>
            <a href="mailto:praveenmtdarker@gmail.com" 
               style={{
                   display: 'inline-block',
                   padding: '1rem 2rem',
                   border: '2px solid #333',
                   textDecoration: 'none',
                   color: '#333',
                   fontFamily: 'var(--font-typewriter)',
                   fontWeight: 'bold',
                   borderRadius: '5px',
                   boxShadow: '4px 4px 0px rgba(0,0,0,0.8)',
                   transition: 'all 0.3s ease',
                   marginBottom: '2rem',
                   background: 'rgba(255, 255, 255, 0.4)'
               }}
               onMouseOver={(e) => {
                   e.currentTarget.style.transform = 'translate(-2px, -2px)';
                   e.currentTarget.style.boxShadow = '6px 6px 0px rgba(209, 17, 17, 1)';
                   e.currentTarget.style.borderColor = '#d11111';
                   e.currentTarget.style.color = '#d11111';
               }}
               onMouseOut={(e) => {
                   e.currentTarget.style.transform = 'none';
                   e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.8)';
                   e.currentTarget.style.borderColor = '#333';
                   e.currentTarget.style.color = '#333';
               }}
            >
                <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i>
                INITIATE_CONTACT( 'EMAIL' )
            </a>
        </div>

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
