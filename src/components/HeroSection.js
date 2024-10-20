import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to InspireMateBot</h1>
        <p>Bringing inspiration and motivation to your Discord server.</p>
        <a href="https://github.com/shyakachaste/InspireMateBot" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
