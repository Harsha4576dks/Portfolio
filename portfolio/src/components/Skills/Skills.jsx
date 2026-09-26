import React from 'react';
import {
  SiFastapi,
  SiJavascript,
  SiPython,
  SiReact,
  SiSupabase,
  SiVercel
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import './Skills.css';

export default function Skills() {
  const skillsList = [
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'React', icon: SiReact },
    { name: 'Supabase', icon: SiSupabase },
    { name: 'SQL', icon: FaDatabase },
    { name: 'Vercel', icon: SiVercel }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsList.map(({ name, icon: Icon }) => (
          <div key={name} className="skill-card">
            {Icon && <Icon className="skill-icon" aria-hidden="true" />}
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}