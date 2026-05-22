import React from 'react';

const Navbar = () => {
    return (
        <>
                <nav id="navbar" className="hidden-nav">
        <div className="nav-left">
            <span>R</span><span className="logo-hidden">everse </span>
            <span>E</span><span className="logo-hidden">ngineering </span>
            <span>D</span><span className="logo-hidden">ude</span>
        </div>
        <div className="nav-right">
            <a href="#chapter-00" className="nav-link" data-target="00">[00]</a>
            <a href="#chapter-01" className="nav-link" data-target="01">[01]</a>
            <a href="#chapter-02" className="nav-link" data-target="02">[02]</a>
            <a href="#chapter-03" className="nav-link" data-target="03">[03]</a>
            <a href="#chapter-04" className="nav-link" data-target="04">[04]</a>
            <a href="#chapter-05" className="nav-link" data-target="05">[05]</a>
        </div>
    </nav>

        </>
    );
};

export default Navbar;
