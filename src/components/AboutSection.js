import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About InspireMateBot</h2>
        <p className="about-description"> 
          InspireMateBot is a Discord bot that brings good vibes to your server. It shares 
        motivational quotes, programming tips, and fun messages to help everyone feel inspired.
        </p>
        <p className="about-description">
        Our goal is to create a positive and supportive community where everyone can learn 
        and grow together. With InspireMateBot, you can easily get inspiration right in your 
        chat.Join us in making your Discord server a happier place with InspireMateBot!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
