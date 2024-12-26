import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling
import { FaFacebook, FaGoogle, FaYoutube, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Quick Links Section */}
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Contact Information</a></li>
        </ul>
      </div>

      {/* Contact Information Section */}
      <div className="footer-contact">
        <h3>Contact Information</h3>
        <p><strong>PayelMisthan Sweets</strong></p>
        <p>123/2, Anandabazar, Kakatpur Road <br />
        Anandabazar, Odisha, Puri, 752118</p>
        <p>Phone: <a href="tel:+919073096322">+91 90730 96322</a></p>
      </div>

      {/* Social Media Links Section */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
            <FaGoogle />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="footer-note">© 2024 SweetsShop. All rights reserved.</p>
     
    </footer>
    
  );
};

export default Footer;
