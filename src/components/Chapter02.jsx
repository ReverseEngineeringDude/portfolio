import React, { useState, useEffect } from 'react';

const Chapter02 = () => {
    const [recentRepos, setRecentRepos] = useState([]);
    const [topRepos, setTopRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchGitHubProjects() {
            try {
                const username = 'ReverseEngineeringDude';
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
                if (!response.ok) return;
                const repos = await response.json();

                // Filter out forks to show original work
                const originalRepos = repos.filter(repo => !repo.fork);

                // Recent 3 projects (already sorted by updated_at)
                setRecentRepos(originalRepos.slice(0, 3));

                // Since the GitHub REST API doesn't return "pinned" status natively, 
                // you can list your pinned repository names here:
                const pinnedRepoNames = [
                    'Harmony-Music',
                    'LatePass',
                    'Blind-assist',
                    'DataStructureVisualizer',
                    'WireFlowWeb',
                    'LovePlayground'
                ];

                // Top projects (filter by pinned names, fallback to most starred if none found)
                let tRepos = originalRepos.filter(repo => pinnedRepoNames.includes(repo.name));

                if (tRepos.length === 0) {
                    // Fallback: highest stars
                    tRepos = [...originalRepos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
                }
                setTopRepos(tRepos);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load GitHub projects:", error);
                setLoading(false);
            }
        }
        fetchGitHubProjects();
    }, []);

    const repoExtras = {
        'Harmony-Music': { impact: 'Automated CI/CD pipeline & API parsing. Actively maintained.', demo: 'https://github.com/ReverseEngineeringDude/Harmony-Music/releases' },
        'LatePass': { impact: 'Used by students to automate daily pass generation.' },
        'Blind-assist': { impact: 'Hardware/IoT integration for real-world accessibility.' },
        'DataStructureVisualizer': { impact: 'Educational tool for interactive algorithm visualization.', demo: 'https://reverseengineeringdude.github.io/DataStructure/' },
        'WireFlowWeb': { impact: 'Advanced web architecture & network visualization tool.', demo: "https://reverseengineeringdude.github.io/WireFlowWeb/" },
        'LovePlayground': { impact: 'Interactive frontend playground and experimental UI.', demo: "https://reverseengineeringdude.github.io/LovePlayground/" }
    };

    const RepoCard = ({ repo }) => {
        const extra = repoExtras[repo.name] || {};

        return (
            <div 
                style={{ position: 'relative', borderBottom: '1px dashed #666', paddingBottom: '1.5rem', transition: 'transform 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(5px)'} 
                onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h4 className="proj-ep" style={{ margin: 0, fontSize: '1.4rem' }}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#d11111' }}>
                            {repo.name.toUpperCase()}
                        </a>
                    </h4>
                    {extra.demo && (
                        <a href={extra.demo} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', fontSize: '0.8rem', background: '#d11111', color: '#fff', padding: '0.2rem 0.5rem', borderRadius: '3px', fontWeight: 'bold' }}>
                            LIVE DEMO <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '4px' }}></i>
                        </a>
                    )}
                </div>
                
                <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '1rem', margin: '0.5rem 0', color: '#333' }}>{repo.description || 'No public description available. Classified.'}</p>

                    {extra.impact && (
                        <div style={{ background: 'rgba(209, 17, 17, 0.1)', borderLeft: '3px solid #d11111', padding: '0.5rem 0.8rem', margin: '0.8rem 0', fontFamily: 'var(--font-typewriter)', fontSize: '0.9rem', fontStyle: 'italic', color: '#444' }}>
                            <i className="fa-solid fa-bolt" style={{ color: '#d11111', marginRight: '5px' }}></i>
                            {extra.impact}
                        </div>
                    )}

                    <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-typewriter)', fontSize: '0.85rem', color: '#666', marginTop: '0.8rem' }}>
                        <span><i className="fa-solid fa-star"></i> {repo.stargazers_count}</span>
                        <span><i className="fa-solid fa-code-branch"></i> {repo.forks_count}</span>
                        <span><i className="fa-solid fa-terminal"></i> {repo.language || 'Unknown'}</span>
                    </div>
                </a>
            </div>
        );
    };

    return (
        <section id="chapter-02" className="chapter chapter-02" data-chapter="02">
            <div className="container">
                <h2 className="section-script-title fade-up">Featured Projects</h2>

                <div className="split-panel" style={{ alignItems: 'flex-start' }}>

                    {/* Left Side: Currently Working On */}
                    <div className="panel-left fade-up stagger-1">
                        <div className="sketch-box">
                            <h3 className="handwritten-heading">Active Directives (Realtime)</h3>
                            <p className="hand-body" style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#555' }}>Live satellite feed of repositories I am actively building right now.</p>

                            <div id="recent-projects-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {loading ? (
                                    <p className="typewriter-sub">Fetching live data from GitHub servers...</p>
                                ) : (
                                    recentRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Top Projects */}
                    <div className="panel-right fade-up stagger-2">
                        <div className="torn-paper-note chapter-02-note" style={{ position: 'relative', right: 'auto', top: 'auto', maxWidth: '100%', boxSizing: 'border-box' }}>
                            <h3 className="handwritten-heading" style={{ color: '#d11111' }}>Top Classified Projects</h3>
                            <p className="hand-body" style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#555' }}>Highest-impact architectures and security tools.</p>

                            <div id="top-projects-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {loading ? (
                                    <p className="typewriter-sub">Decrypting repository data...</p>
                                ) : (
                                    topRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Chapter02;
