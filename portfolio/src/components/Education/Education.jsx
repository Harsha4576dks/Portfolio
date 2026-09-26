import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="edu-card">
        <h3>Jyothy Institute of Technology</h3>
        <p className="batch">Batch: 2021 – 2025</p>
        <p className="cgpa">CGPA: <span>8.54</span></p>
      </div>
    </section>
  );
}