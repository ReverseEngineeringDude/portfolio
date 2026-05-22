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

    const RepoCard = ({ repo }) => (
        <div style={{ borderBottom: '1px dashed #666', paddingBottom: '1rem', transition: 'transform 0.2s' }}>
            <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateX(5px)'} onMouseOut={(e)=>e.currentTarget.style.transform='none'}>
                <h4 className="proj-ep" style={{ margin: 0, color: '#d11111' }}> {repo.name.toUpperCase()}</h4>
                <p style={{ fontFamily: 'var(--font-typewriter)', fontSize: '1rem', margin: '0.5rem 0' }}>{repo.description || 'No public description available. Classified.'}</p>
                <div style={{ display: 'flex', gap: '1rem', fontFamily: 'var(--font-typewriter)', fontSize: '0.85rem', color: '#555' }}>
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks_count}</span>
                    <span>{repo.language || 'Unknown'}</span>
                </div>
            </a>
        </div>
    );

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
