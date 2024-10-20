import React from 'react';
import './InstallationSection.css'; 

function InstallationSection() {
  return (
    <div className="installation-section">
      <h2>Installation Instructions</h2>
      <pre>
        <code>
          {`npm install framer-motion`}
        </code>
      </pre>
      <p>After installation, you can use the bot in your Discord server by following the steps in the Usage section.</p>
    </div>
  );
}

export default InstallationSection;
