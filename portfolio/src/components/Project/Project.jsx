import React from 'react';
import './Project.css';

export default function Project() {
  const dummyProjects = [
    { title: 'Project One', desc: 'FastAPI & React Application', github: 'https://github.com', live: 'https://vercel.com' },
    { title: 'Project Two', desc: 'Supabase & SQL Analytics', github: 'https://github.com', live: 'https://vercel.com' }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {dummyProjects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="links">
              <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={p.live} target="_blank" rel="noreferrer" className="live-btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}