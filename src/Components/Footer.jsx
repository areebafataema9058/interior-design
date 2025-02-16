// export default Footer;
import React from "react";
import "../css/Footer.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-branding">
          <h2>Interior Creations</h2>
          <p>Your dream space, our design expertise.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/livingroom">LivingRoom</NavLink>
            </li>
            <li>
              <NavLink to="/bedroom">BedRoom</NavLink>
            </li>
            <li>
              <NavLink to="/kitchen">Kitchen</NavLink>
            </li>
            <li>
              <NavLink to="/outdoor">OutDoor</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/about"> About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@interiorcreations.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Interior Creations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
