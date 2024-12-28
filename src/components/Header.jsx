import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';
import { FaSearch, FaUser, FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';


const Header = ({ scrolled, setSearchTerm }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [location, setLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [displayLocation, setDisplayLocation] = useState('Select Location');
  const [isLanguageDropdownVisible, setLanguageDropdownVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [isAccountPopupVisible, setAccountPopupVisible] = useState(false);

  const handleLocationClick = () => {
    setPopupVisible(true);
  };

  const handleLocationSubmit = () => {
    setDisplayLocation(`${location}, ${pincode}`);
    setPopupVisible(false);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!isLanguageDropdownVisible);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownVisible(false);
  };
  const toggleAccountPopup = () => {
    setAccountPopupVisible((prev) => !prev);
  };
  const handleLogoClick = () => {
    navigate('/'); // Navigate to the home page when the logo is clicked
  };

  return (
    <>
      <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo Section */}
        <div className="header-logo" onClick={handleLogoClick}>
          <img src="/images/amazon-logo.png" alt="SweetsShop Logo" className="header-logo-image circular-logo" />
          <span className="header-logo-text">𝐒𝐰𝐞𝐞𝐭𝐬𝐒𝐡𝐨𝐩</span>
        </div>

        {/* Location Section */}
        <div className="header-location" onClick={handleLocationClick}>
          <FaMapMarkerAlt className="header-location-icon" />
          <div className="header-location-text">
            <span className="header-location-label">Deliver to</span>
            <span className="header-location-city">{displayLocation}</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="header-search-bar">
          <input
            type="text"
            placeholder="Search for sweets and treats"
            className="header-search-input"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} // Capture search input
          />
          <button className="header-search-button" aria-label="Search">
            <FaSearch />
          </button>

          {/* Language Button */}
          <div className="header-language">
            <button onClick={toggleLanguageDropdown} className="language-button">
              Language: {selectedLanguage} ▼
            </button>
            {isLanguageDropdownVisible && (
              <ul className="language-dropdown">
                {['English', 'Hindi', 'French', 'Spanish', 'German'].map((language) => (
                  <li key={language} onClick={() => selectLanguage(language)}>
                    {language}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right Links */}
        <div className="header-links">
          <div
            className="header-account"
            onClick={toggleAccountPopup}
            
          >
            <span className="header-account-label">{user ? `Hello, ${user.name}` : 'Hello, Sign in'}</span>
            <span className="header-account-dropdown">Account & Lists</span>
          </div>

          <div className="header-orders">
            <span className="header-orders-label">Returns</span>
            <span className="header-orders-sub">& Orders</span>
          </div>
          <div className="header-cart" onClick={() => navigate('/cart')}>
            <FaShoppingCart className="header-cart-icon" />
            <span className="header-cart-count">{cart.length}</span>
          </div>
        </div>
      </header>

      {/* Popup Ready*/}
      {isPopupVisible && (
        <div className="location-popup">
          <div className="popup-content">
            <h2>Enter Your Location</h2>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or Area"
              />
            </label>
            <label>
              Pincode:
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Pincode"
              />
            </label>
            <div className="popup-actions">
              <button onClick={() => setPopupVisible(false)}>Cancel</button>
              <button onClick={handleLocationSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )}

{isAccountPopupVisible && (
  <div className="location-popup">
  <div className="account-popup-two">
    {/* Popup Header */}
    <div className="popup-header-two">
      <button onClick={() => navigate('/signin')}className="popup-signin-button">Sign In</button>
      <button onClick={() => navigate('/register')} className="popup-register-button">
              Register
      </button>    </div>

    {/* Popup Content */}
    <div className="popup-content-two">
      {/* Left Section */}
      <div className="popup-column-one">
        <h4>Your Lists</h4>
        <ul>
          <li><a href="/wishlist">Create a Wish List</a></li>
          <li><a href="/universal-wishlist">Wish from Any Website</a></li>
          <li><a href="/baby-wishlist">Baby Wishlist</a></li>
          <li><a href="/discover-style">Discover Your Style</a></li>
          <li><a href="/showroom">Explore Showroom</a></li>
        </ul>
        <div className="popup-actions">
            {/* Close Button */}
            <button onClick={() => setAccountPopupVisible(false)}>Close</button>
          </div>
      </div>

      {/* Right Section */}
      <div className="popup-column-one">
        <h4>Your Account</h4>
        <ul>
          <li><a href="/orders">Your Orders</a></li>
          <li><a href="/wishlist">Your Wish List</a></li>
          <li><a href="/recommendations">Your Recommendations</a></li>
          <li><a href="/prime">Your Prime Membership</a></li>
          <li><a href="/prime-video">Your Prime Video</a></li>
          <li><a href="/subscribe-save">Your Subscribe & Save Items</a></li>
          <li><a href="/subscriptions">Memberships & Subscriptions</a></li>
          <li><a href="/seller-account">Your Seller Account</a></li>
          <li><a href="/content-devices">Manage Your Content and Devices</a></li>
          <li><a href="/business-account">Register for a free Business Account</a></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
)}

    </>
  );
};

export default Header;
