import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Chapter01 from './components/Chapter01';
import Chapter02 from './components/Chapter02';
import Chapter03 from './components/Chapter03';
import Chapter04 from './components/Chapter04';
import Chapter05 from './components/Chapter05';
import Footer from './components/Footer';

function App() {
  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    // Check if mobile device
    if (window.innerWidth < 768) {
      setShowMobileWarning(true);
    }

    // Force fullscreen on first interaction for laptops
    const handleInteraction = () => {
      if (window.innerWidth >= 768 && !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen().catch((e) => console.log('Fullscreen rejected by browser.'));
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen().catch((e) => console.log('Fullscreen rejected by browser.'));
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen().catch((e) => console.log('Fullscreen rejected by browser.'));
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen().catch((e) => console.log('Fullscreen rejected by browser.'));
        }
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // 1. Scroll observer for fade-up animations and stat bars
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // If it's a stat bar, animate the width
                if (entry.target.classList.contains('stat-bar-fill')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width;
                }
            }
        });
    }, observerOptions);

    const fadeEls = document.querySelectorAll('.fade-up, .stat-bar-fill');
    fadeEls.forEach(el => observer.observe(el));

    // 2. Custom Mouse Follower (Ink blob)
    const follower = document.getElementById('mouse-follower');
    
    const onMouseMove = (e) => {
        if(follower) {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }
    };
    
    document.addEventListener('mousemove', onMouseMove);

    const addActive = () => follower && follower.classList.add('active');
    const removeActive = () => follower && follower.classList.remove('active');
    
    const interactables = document.querySelectorAll('a, button, .social-icon-btn, .nav-left');
    interactables.forEach(el => {
        el.addEventListener('mouseenter', addActive);
        el.addEventListener('mouseleave', removeActive);
    });

    // 3. Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = window.scrollY;
    
    const onScrollNavbar = () => {
        if(!navbar) return;
        let currentScroll = window.scrollY;
        if (currentScroll > 50) {
            if (currentScroll < lastScroll) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        } else {
            navbar.classList.remove('visible');
        }
        lastScroll = currentScroll;
    };
    window.addEventListener('scroll', onScrollNavbar);

    // 4. Parallax
    const bgWrapper = document.querySelector('.parallax-bg-wrapper');
    const fgWrapper = document.querySelector('.parallax-fg-wrapper');
    const onScrollParallax = () => {
        let scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
            if (bgWrapper) bgWrapper.style.transform = `translateY(${scrollY * 0.4}px)`;
            if (fgWrapper) fgWrapper.style.transform = `translateY(${scrollY * 0.15}px)`;
        }
    };
    window.addEventListener('scroll', onScrollParallax);

    return () => {
        fadeEls.forEach(el => observer.unobserve(el));
        document.removeEventListener('mousemove', onMouseMove);
        interactables.forEach(el => {
            el.removeEventListener('mouseenter', addActive);
            el.removeEventListener('mouseleave', removeActive);
        });
        window.removeEventListener('scroll', onScrollNavbar);
        window.removeEventListener('scroll', onScrollParallax);
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return (
    <>
      <div id="mouse-follower" className="mouse-follower"></div>
      
      {showMobileWarning && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          background: 'rgba(209, 17, 17, 0.95)',
          color: '#fff',
          zIndex: 9999,
          padding: '1rem',
          textAlign: 'center',
          fontFamily: 'var(--font-typewriter)',
          fontSize: '0.9rem',
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span><i className="fa-solid fa-desktop" style={{marginRight: '8px'}}></i> For the optimal immersive experience, view on a laptop or desktop screen.</span>
          <button onClick={() => setShowMobileWarning(false)} style={{
            background: 'none',
            border: '1px solid #fff',
            color: '#fff',
            padding: '4px 8px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
      )}

      <Navbar />
      <main>
        <Landing />
        <Chapter01 />
        <Chapter02 />
        <Chapter03 />
        <Chapter04 />
        <Chapter05 />
      </main>
      <Footer />
    </>
  );
}

export default App;
