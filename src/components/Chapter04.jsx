import React from 'react';

const Chapter04 = () => {
    return (
        <>
            {/* CHAPTER 04: LEARNING PATH */}
<section id="chapter-04" className="chapter chapter-04" data-chapter="04">
    <div className="container">
        <h2 className="section-script-title fade-up">Learning Path & Timeline</h2>

        <div className="timeline">
            {/* Entry 1 */}
            <div className="timeline-item fade-up stagger-1">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <span className="timeline-date">2020</span>
                    <h3 className="timeline-title">SSLC</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        CBHSS Vallikkunnu
                    </p>
                </div>
            </div>

            {/* Entry 2 */}
            <div className="timeline-item fade-up stagger-2">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <span className="timeline-date">2022</span>
                    <h3 className="timeline-title">Plus Two (Bio Science)</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        M. V. Higher Secondary School Ariyallur
                    </p>
                </div>
            </div>

            {/* Entry 3 */}
            <div className="timeline-item fade-up stagger-3">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <span className="timeline-date">2022</span>
                    <h3 className="timeline-title">CEH and CPT</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        Redteam Hacker Academy, Kozhikode, Nadakkavu<br />
                        Dived into the world of ethical hacking and penetration testing.
                    </p>
                </div>
            </div>

            {/* Entry 4 */}
            <div className="timeline-item fade-up stagger-4">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <span className="timeline-date">2023</span>
                    <h3 className="timeline-title">Computerized Accounting</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        GNet Kohinoor
                    </p>
                </div>
            </div>

            {/* Entry 5 */}
            <div className="timeline-item fade-up stagger-1">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                    <span className="timeline-date">2025 - 2027</span>
                    <h3 className="timeline-title">Computer Engineering</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        Seethi Sahib Memorial College, Tirur<br />
                        Formal education advancing in hardware and software systems.
                    </p>
                </div>
            </div>

            {/* Entry 6 */}
            <div className="timeline-item fade-up stagger-2">
                <div className="timeline-marker" style={{'background': '#000'}}></div>
                <div className="timeline-content" style={{'border': '1px solid #d11111'}}>
                    <span className="timeline-date">2025 - Present</span>
                    <h3 className="timeline-title">Bug Bounty Hunting</h3>
                    <p className="hand-body" style={{'fontSize': '1.4rem', 'color': '#444'}}>
                        Actively finding vulnerabilities and securing systems across the internet.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default Chapter04;
