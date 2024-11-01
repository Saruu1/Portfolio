import React, { useState } from 'react';
import "./navbar.css";
import {Link, useNavigate} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
const Navbar = () => {
  const [showMobMenu, setshowMobMenu] = useState(false)
  const [progress, setprogress] = useState(0)
  const navigate = useNavigate()
  const showNav = ()=>{
    setshowMobMenu(!showMobMenu);
    if (!showMobMenu) {
      document.body.classList.add('no-scroll'); // Add class when menu is open
    } else {
      document.body.classList.remove('no-scroll'); // Remove class when menu is closed
    }
  }
  const handleLinkClick = (event, path) =>{
    event.preventDefault();
    setshowMobMenu(false);
    document.body.classList.remove('no-scroll');
    setprogress(30); // Start loading
    setTimeout(() => {
        setprogress(100); // Complete loading
        setTimeout(() => {
            navigate(path); // Navigate to the new path
            setprogress(0); // Reset progress
        }, 500); // Keep at 100% for half a second
    }, 400); // Simulated loading time
  }
  return (
    <>
    <LoadingBar color='#f11946' progress={progress}/>
    <div className="navbar">
      <div className="name"><p>Sarvar</p></div>
        <a href="/Resume.pdf" target='_blank' download className="resume-btn">My Resume</a>
          <ul>
            <li>
          <Link to="/" onClick={(event) => handleLinkClick(event,'/')}>Home</Link>
          <Link to="/about" onClick={(event) => handleLinkClick(event,'/about')}>About</Link>
          <Link to="/projects" onClick={(event) => handleLinkClick(event,'/projects')}>Projects</Link>
          <Link to="/contact" onClick={(event) => handleLinkClick(event,'/contact')}>Contact</Link>
            </li>
          </ul>
          {/* Css of hamburger section is written inside Common folder in commonclasses.css */}
          <button className={`hamburger hamburger--spin ${showMobMenu?"is-active":""}`}type="button" onClick={showNav}>
                    <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
             </button>
    </div>
      <div className={`mobileNav ${showMobMenu ? 'is-active' : ''}`}>
        <ul className="mobileNavList">
          <li><Link to="/" onTouchStart={(event) => handleLinkClick(event, '/')}>Home</Link></li>
          <li><Link to="/about" onTouchStart={(event) => handleLinkClick(event, '/about')}>About</Link></li>
          <li><Link to="/projects" onTouchStart={(event) => handleLinkClick(event, '/projects')}>Projects</Link></li>
          <li><Link to="/contact" onTouchStart={(event) => handleLinkClick(event, '/contact')}>Contact</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar