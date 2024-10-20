import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Made with ❤️ by Shyaka Chaste</p>
      <a href="https://github.com/shyakachaste/InspireMateBot" target="_blank" rel="noopener noreferrer">
        <img src="/github-icon.png" alt="GitHub" className="footer-github-icon" />
      </a>
    </footer>
  );
}

export default Footer;
