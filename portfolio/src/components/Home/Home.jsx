import React from 'react';
import './Home.css';
import resumePdf from '../../assets/Resume (9) (1).pdf';

export default function Home() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-container">
      <span className="badge">Full-Stack Software Engineer</span>
      <h1>Hi, I'm <span className="highlight">S. Harsha</span></h1>
      <p>
        Passionate about crafting high-performance full-stack web applications with modern tech like React, FastAPI, and scalable backends.
      </p>

      <div className="btn-group">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          View Resume
        </a>
        <button onClick={scrollToProjects} className="btn btn-secondary">
          View Projects
        </button>
      </div>
    </section>
  );
}