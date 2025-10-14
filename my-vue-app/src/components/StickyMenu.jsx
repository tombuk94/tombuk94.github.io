import React, { useState, useEffect, useRef } from 'react';

export default function StickyMenu() {
  const menuRef = useRef(null);

  const [fixed, setFixed] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

   

    const positions = {
      profile: document.getElementById('profile')?.offsetTop || 0,
      experiences: document.getElementById('experiences')?.offsetTop || 0,
      abilities: document.getElementById('abilities')?.offsetTop || 0,
      ClarizenProjects: document.getElementById('ClarizenProjects')?.offsetTop || 0,
      LandingPages: document.getElementById('LandingPages')?.offsetTop || 0,
      projects: document.getElementById('projects')?.offsetTop || 0,
      contact: document.getElementById('contact')?.offsetTop || 0
    };

    const menuTopPosition = menu.offsetTop;
    const menuWidth = menu.offsetWidth;

    function onScroll() {
      const scrollY = window.scrollY;

      // Sticky logic
      if (scrollY >= menuTopPosition) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      // Active section logic
      if (scrollY >= positions.contact - 600) setActiveSection('contact');
      else if (scrollY >= positions.LandingPages) setActiveSection('LandingPages');
      else if (scrollY >= positions.projects) setActiveSection('projects');
      else if (scrollY >= positions.ClarizenProjects) setActiveSection('ClarizenProjects');      
      else if (scrollY >= positions.abilities) setActiveSection('abilities');
      else if (scrollY >= positions.experiences) setActiveSection('experiences');
      else if (scrollY >= positions.profile) setActiveSection('profile');      
      else setActiveSection(null);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      id="menu"
      ref={menuRef}
      style={{
        position: fixed ? 'fixed' : 'absolute',
        top: fixed ? '5px' : '100%',
        width: fixed ? '120px' : 'auto',
        color: 'white',
        textAlign: 'center',
        right: '5%',
        zIndex: 1,
        backgroundColor: 'black',
      }}
    >
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li
          id="a"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'profile' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#profile" style={{ color: 'white', textDecoration: 'none' }}>
            Profile
          </a>
        </li>
        <li
          id="b"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'experiences' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#experiences" style={{ color: 'white', textDecoration: 'none' }}>
            Experiences
          </a>
        </li>
        <li
          id="c"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'abilities' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#abilities" style={{ color: 'white', textDecoration: 'none' }}>
            Abilities
          </a>
        </li>
        <li
          id="d"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'ClarizenProjects' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#ClarizenProjects" style={{ color: 'white', textDecoration: 'none' }}>
            Clarizen Projects
          </a>
        </li>         
        <li
          id="e"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'projects' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>
            Web Projects
          </a>
        </li>
        <li
          id="f"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'LandingPages' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#LandingPages" style={{ color: 'white', textDecoration: 'none' }}>
            Landing Pages
          </a>
        </li>
        <li
          id="g"
          style={{
            padding: '30px 0',
            fontSize: 20,
            fontWeight: 500,
            backgroundColor: activeSection === 'contact' ? '#466b6e' : '#222222',
            cursor: 'pointer',
          }}
        >
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
