import React, { useState } from 'react';
import '../styles/SecondHeader.css';

const SecondHeader = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    'All', 'MX Player', 'Sell', 'Amazon Pay', 'Gift Cards',
    'Buy Again', 'Gift Ideas', 'Health, Household & Personal Care', 
    'AmazonBasics', 'Coupons', 'Books', 'Home Improvement'
  ];

  const sidebarItems = [
    { title: 'Trending', options: ['Best Sellers', 'New Releases', 'Movers and Shakers'] },
    { title: 'Digital Content and Devices', options: ['Echo & Alexa', 'Fire TV', 'Kindle E-Readers & eBooks', 'Audible Audiobooks', 'Amazon Prime Video', 'Amazon Prime Music'] },
    {
    title: 'Shop by Category',
    options: [
      'Rasgulla',
      'Gulab Jamun',
      'Jalebi',
      'Ladoo',
      'Barfi',
      'Kheer',
    ]},
    { title: 'Programs & Features', options: ['Amazon Pay', 'Gift Cards & Mobile Recharges', 'Amazon Launchpad', 'Amazon Business', 'See all'] },
    { title: 'Help & Settings', options: ['Your Account', 'Customer Service', 'Sign in'] }
  ];

  return (
    <div className="second-header">
      <nav className="second-header-nav">
        <ul className="second-header-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`second-header-item ${hoveredIndex === index ? 'hovered' : ''}`}
              onClick={index === 0 ? () => setSidebarOpen(!isSidebarOpen) : null}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="signin-container">
            <img src="/images/signin.jpg" alt="Sign In" className="signin-icon" />
            <a href="/signin" className="signin-link">
              <p className="hello-text">Hello, <span>Sign in</span></p>
            </a>
          </div>
          <button className="close-button" onClick={() => setSidebarOpen(false)}>×</button>
        </div>
        <div className="sidebar-menu">
          {sidebarItems.map((section, index) => (
            <div key={index} className="sidebar-section">
              <h3 className="sidebar-title">{section.title}</h3>
              <ul>
                {section.options.map((option, idx) => (
                  <li key={idx} className="sidebar-option">{option}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
