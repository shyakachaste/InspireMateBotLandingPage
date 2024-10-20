import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="InspireMateBot Logo" className="logo-img" />
        <h1 className="logo-text">InspireMateBot</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

