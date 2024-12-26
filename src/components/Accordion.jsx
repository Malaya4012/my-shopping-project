import React, { useState } from 'react';
import '../styles/Accordion.css'; // CSS for the accordion

const Accordion = ({ categories }) => {
  const [openStates, setOpenStates] = useState(categories.map(() => false));

  const toggleSection = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="accordion-container">
      <div className="accordion">
        <h2>Sweets Categories</h2>
        {categories.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header">
              <h3 className="accordion-title">{item.title}</h3>
              <button
                className="accordion-toggle"
                onClick={() => toggleSection(index)}
              >
                {openStates[index] ? '−' : '+'}
              </button>
            </div>
            <div
              className={`accordion-content ${
                openStates[index] ? 'open' : 'closed'
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
