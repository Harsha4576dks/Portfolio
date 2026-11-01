import React from 'react';
import './Project.css';

export default function Project() {
  const dummyProjects = [
    { title: 'CET Counselling Portal', desc: 'FastAPI & React Application', github: 'https://github.com/Harsha4576dks/Centralized-College-Counseling-Seat-Allocation-Platform.git', live: 'https://centralized-college-counseling-seat-kappa.vercel.app' },
    { title: 'Expense Tracker', desc: 'Supabase & SQL Analytics', github: 'https://github.com/Harsha4576dks/expense_tracker_mvc.git', live: 'https://expense-tracker-mvc-plum.vercel.app' }
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