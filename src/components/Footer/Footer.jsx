import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/nav-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-cards">
        <div className="footer-card">
          <a href="/" className="footer-logo">
            <img src={FooterLogo} alt="Footer Logo" className="logo" />
          </a>
          <span className="footer-card-text">
            'Bukhara Natural Product' has been a company that produces cotton
            fabrics for many years for use all over the world.
          </span>
        </div>
        <div className="footer-card">
          <span className="card-title">Menu</span>
          <div className="footer-nav-items">
            <a href="/" className="card-item">
              home
            </a>
            <a href="/about-us" className="card-item">
              About Us
            </a>
            <a href="/shop" className="card-item">
              Collection
            </a>
            <a href="/contact-us" className="card-item">
              Contacts
            </a>
          </div>
        </div>
        <div className="footer-card">
          <span className="card-title">Contacts</span>
          <span className="card-contact-item">Bukhara, st. Alpomysh 80.</span>
          <span className="card-contact-item">Bnpuz@bk.ru</span>
          <span className="card-contact-item">bnp_fabrik</span>
          <span className="card-contact-item">info@bnpfabric.com</span>
          <a href="tel:+998903646903">+998903646903</a>
          <a href="tel:+998903646903">+998903646903</a>
        </div>
        <div className="footer-card footer-contact">
          <span className="card-title">Subscribe to our email</span>
          <div className="footer-email-btn">
            <input type="email" placeholder="Enter Your Email" />
            <button className="footer-btn">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-texts">
        <span className="footer-text">
          &copy;{new Date().getFullYear()}LLC"BUKHARA NATURAL PRODUCT". All
          rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
