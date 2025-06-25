import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => (
  <footer className="custom-footer">
    <div className="custom-footer-content">
      <div className="custom-footer-column">
        <h3>COMPANY</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/story">Our Story</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Wholesale</a></li>
        </ul>
      </div>

      <div className="custom-footer-column">
        <h3>OUR SERVICES</h3>
        <ul>
          <li><a href="#">Bespoke Clothing</a></li>
          <li><a href="#">Wedding Attire</a></li>
          <li><a href="#">Ready To Wear</a></li>
          <li><a href="#">Store Locator</a></li>
          <li><Link to="/appointment">Book Appointment</Link></li>
        </ul>
      </div>

      <div className="custom-footer-column">
        <h3>CUSTOMER SUPPORT</h3>
        <ul>
          <li><a href="#">Help & FAQs</a></li>
          <li><a href="#">Shipping Information</a></li>
          <li><a href="#">Returns & Exchanges</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Track Order</a></li>
        </ul>
      </div>

      <div className="custom-footer-column">
        <h3>POLICY & TERMS</h3>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>

      <div className="custom-footer-column">
        <h3>FOLLOW US</h3>
        <div className="custom-social-icons">
          <a href="https://www.facebook.com/" title="Facebook">𝔽</a>
          <a href="https://www.instagram.com/" title="Instagram">𝕀𝕘</a>
          <a href="https://www.pinterest.com/" title="Pinterest">ℙ</a>
          <a href="https://x.com/" title="Twitter">𝕋𝕨</a>
        </div>
      </div>

      <div className="custom-footer-column">
        <h3>SIGN UP</h3>
        <p>Receive exclusive email-only promotions and offers</p>
        <form className="custom-signup-form" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>

    <div className="custom-footer-bottom">
      <div className="custom-footer-logo">अलंकार</div>
      <div className="custom-copyright">© 2025 Alankar. All rights reserved.</div>
      <div className="custom-language-selector">
        <select>
          <option value="en">English</option>
          <option value="hi">हिंदी (Hindi)</option>
          <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
        </select>
      </div>
    </div>
  </footer>
);

export default Footer;