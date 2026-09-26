import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <h2>Thank you for visiting!</h2>
      <p>Feel free to reach out for collaborations or opportunities.</p>
      <a href="mailto:harshivahm@gmail.com" className="reach-me-btn">
        Reach Me
      </a>
    </footer>
  );
}