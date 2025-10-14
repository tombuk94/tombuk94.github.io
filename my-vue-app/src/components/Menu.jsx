import React from 'react';

export default function Menu() {
  return (
    <div id="menu" >
      <ul>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="100">
          <a href="#profile">Profile</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="200">
          <a href="#experiences">Experiences</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="300">
          <a href="#abilities">Abilities</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="300">
          <a href="#ClarizenProjects">Clarizen Projects</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="400">
          <a href="#projects">Web Projects</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="400">
          <a href="#LP">Landing Pages</a>
        </li>
        <li className="menu-item" data-aos="fade-right" data-aos-delay="500">
          <a href="#contact">Contact</a>
        </li>       
      </ul>
    </div>
    
  );
}
