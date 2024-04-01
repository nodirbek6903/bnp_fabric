import React from "react";
import "./Navbar.css";
import NavLogo from "../../images/nav-logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  return (
    <div className="nav-container">
      <div className="container">
        <div className="nav-logo-items">
          <div className="nav-logo">
            <a href="/"><img src={NavLogo} alt="Logo" /></a>
          </div>
          <div className="nav-items">
            <Link to="/" className={`nav-item ${location.pathname==="/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/shop" className={`nav-item ${location.pathname==="/shop" ? "active" : ""}`}>
              Collection
            </Link>
            <Link to="/about-us" className={`nav-item ${location.pathname==="/about-us" ? "active" : ""}`}>
              About Us
            </Link>
            <Link to="/contact-us" className={`nav-item ${location.pathname==="/contact-us" ? "active" : ""}`}>
              Contacts
            </Link>
          </div>
        </div>
          <select className="languages" name="language" id="">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="uz">O'zbek</option>
          </select>
      </div>
    </div>
  );
};

export default Navbar;
