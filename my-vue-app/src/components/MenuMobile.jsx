import React, { useState } from 'react';
import '../MenuMobile.css';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="d-md-none"> {/* só aparece no mobile */}
      {/* Botão hambúrguer */}
      <div
        className={`hamburger ${open ? 'is-active' : ''}`}
        onClick={toggleMenu}
        aria-label={open ? 'Close menu' : 'Open menu'}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${open ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>

      {/* Menu lateral */}
      <nav className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          <li><a href="#profile" onClick={() => setOpen(false)}>Profile</a></li>
          <li><a href="#experiences" onClick={() => setOpen(false)}>Experiences</a></li>
          <li><a href="#abilities" onClick={() => setOpen(false)}>Abilities</a></li>
          <li><a href="#ClarizenProjects" onClick={() => setOpen(false)}>Clarizen Projects</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Web Projects</a></li>
          <li><a href="#LandingPages" onClick={() => setOpen(false)}>Landing Pages</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}
