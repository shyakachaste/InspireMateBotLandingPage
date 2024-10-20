import React from 'react';
import './UsageSection.css';

function UsageSection() {
  return (
    <section className="usage-section">
      <h2>Usage</h2>
      <div className="code-editor">
        <pre>
          {`// Add an inspirational message
$inspire

// Get programming tips
$tip

// Add new custom motivational message
$new [message]

// Show all motivational messages
$list`}
        </pre>
      </div>
    </section>
  );
}

export default UsageSection;
