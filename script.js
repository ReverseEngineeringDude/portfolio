document.addEventListener('DOMContentLoaded', async () => {
    const components = [
        { id: 'navbar-placeholder', file: 'navbar.html' },
        { id: 'landing-placeholder', file: 'landing.html' },
        { id: 'chapter-01-placeholder', file: 'chapter-01.html' },
        { id: 'chapter-02-placeholder', file: 'chapter-02.html' },
        { id: 'chapter-03-placeholder', file: 'chapter-03.html' },
        { id: 'chapter-04-placeholder', file: 'chapter-04.html' },
        { id: 'chapter-05-placeholder', file: 'chapter-05.html' },
        { id: 'footer-placeholder', file: 'footer.html' }
    ];

    try {
        await Promise.all(components.map(async (comp) => {
            const res = await fetch(`components/${comp.file}`);
            if (res.ok) {
                const html = await res.text();
                const placeholder = document.getElementById(comp.id);
                if (placeholder) {
                    placeholder.outerHTML = html;
                }
            }
        }));
    } catch (error) {
        console.error("Failed to load components:", error);
    }

    initApp();
    fetchGitHubProjects();
});

async function fetchGitHubProjects() {
    try {
        const username = 'ReverseEngineeringDude';
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) return;
        const repos = await response.json();

        // Filter out forks to show original work
        const originalRepos = repos.filter(repo => !repo.fork);

        // Recent 3 projects (already sorted by updated_at)
        const recentRepos = originalRepos.slice(0, 3);

        // Since the GitHub REST API doesn't return "pinned" status natively, 
        // you can list your pinned repository names here:
        const pinnedRepoNames = [
            'Harmony-Music',
            'LatePass',
            'Blind-assist',
            'DataStructureVisualizer',
            'WireFlowWeb',
            'LovePlayground'
        ]; // <-- Edit these to match your actual pinned repos!

        // Top projects (filter by pinned names, fallback to most starred if none found)
        let topRepos = originalRepos.filter(repo => pinnedRepoNames.includes(repo.name));

        if (topRepos.length === 0) {
            // Fallback: highest stars
            topRepos = [...originalRepos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 3);
        }

        const recentContainer = document.getElementById('recent-projects-container');
        const topContainer = document.getElementById('top-projects-container');

        const generateRepoHTML = (repo) => `
            <div style="border-bottom: 1px dashed #666; padding-bottom: 1rem; transition: transform 0.2s;">
                <a href="${repo.html_url}" target="_blank" style="text-decoration: none; color: inherit; display: block;" onmouseover="this.parentElement.style.transform='translateX(5px)'" onmouseout="this.parentElement.style.transform='none'">
                    <h4 class="proj-ep" style="margin: 0; color: #d11111;"> ${repo.name.toUpperCase()}</h4>
                    <p style="font-family: var(--font-typewriter); font-size: 1rem; margin: 0.5rem 0;">${repo.description || 'No public description available. Classified.'}</p>
                    <div style="display: flex; gap: 1rem; font-family: var(--font-typewriter); font-size: 0.85rem; color: #555;">
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                        <span>${repo.language || 'Unknown'}</span>
                    </div>
                </a>
            </div>
        `;

        if (recentContainer) {
            recentContainer.innerHTML = recentRepos.map(generateRepoHTML).join('');
        }
        if (topContainer) {
            topContainer.innerHTML = topRepos.map(generateRepoHTML).join('');
        }

    } catch (error) {
        console.error("Failed to load GitHub projects:", error);
    }
}

function initApp() {
    // 1. Scroll observer for fade-up animations and stat bars
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger stat bars if inside
                const statFills = entry.target.querySelectorAll('.stat-fill');
                statFills.forEach(fill => {
                    const width = fill.getAttribute('data-width');
                    fill.style.width = width;
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .chapter').forEach(el => {
        observer.observe(el);
    });

    // 2. Navbar and Sidebar chapter sync
    const sections = document.querySelectorAll('section.chapter');
    const navLinks = document.querySelectorAll('.nav-link');
    const sideLinks = document.querySelectorAll('.side-link');
    const navbar = document.getElementById('navbar');
    const sidebar = document.querySelector('.sidebar');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('data-chapter');

                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-target') === targetId);
                });

                sideLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-target') === targetId);
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => sectionObserver.observe(section));

    // 3. Navbar show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('visible');
            sidebar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
            sidebar.classList.remove('visible');
        }
    });

    // 4. Rotating Quotes (Chapter 04)
    const quotes = document.querySelectorAll('.quote-card');
    let currentQuote = 0;

    if (quotes.length > 0) {
        setInterval(() => {
            quotes[currentQuote].classList.remove('active');
            currentQuote = (currentQuote + 1) % quotes.length;
            quotes[currentQuote].classList.add('active');
        }, 5000);
    }

    // 5. Dynamic Hero Parallax
    const bgWrapper = document.querySelector('.parallax-bg-wrapper');
    const fgWrapper = document.querySelector('.parallax-fg-wrapper');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            if (bgWrapper) bgWrapper.style.transform = `translateY(${scrollY * 0.4}px)`;
            if (fgWrapper) fgWrapper.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
    });
}
