import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection'; // Assume you've created this section
import UsageSection from './components/UsageSection';
import InstallationSection from './components/InstallationSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="usage">
        <UsageSection />
      </section>
      <section id="installation">
        <InstallationSection />
      </section>
      <Footer />
    </>
  );
}

export default App;
