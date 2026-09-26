import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => scrollToSection('home')}>
        S. Harsha
      </div>
      <ul className="nav-links">
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('education')}>Education</li>
        <li onClick={() => scrollToSection('projects')}>Projects</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
      </ul>
    </nav>
  );
}