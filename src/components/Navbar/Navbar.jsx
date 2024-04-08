import React, { useState } from "react";
import "./Navbar.css";
import NavLogo from "../../images/nav-logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false)
  const {t,i18n} = useTranslation()

  const handleClickNav = () => {
    setShowNavbar(!showNavbar)
  }
  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const location = useLocation()
  return (
    <div className="nav-container">
      <div className="container">
        <div className="nav-logo-items">
          <div className="nav-logo">
            <a href="/"><img src={NavLogo} alt="Logo" /></a>
          </div>
          <div className={`nav-items ${showNavbar ? "active" : ""}`}>
            <FaTimes className="close" onClick={handleClickNav} />
            <Link to="/" onClick={handleClickNav} className={`nav-item ${location.pathname==="/" ? "active" : ""}`}>
              {t("nav-item1")}
            </Link>
            <Link to="/shop" onClick={handleClickNav} className={`nav-item ${location.pathname==="/shop" ? "active" : ""}`}>
              {t("nav-item2")}
            </Link>
            <Link to="/about-us" onClick={handleClickNav} className={`nav-item ${location.pathname==="/about-us" ? "active" : ""}`}>
              {t("nav-item3")}
            </Link>
            <Link to="/contact-us" onClick={handleClickNav} className={`nav-item ${location.pathname==="/contact-us" ? "active" : ""}`}>
              {t("nav-item4")}
            </Link>
          </div>
        </div>
          <select className="languages" onChange={handleChangeLanguage} name="language" id="">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="uz">O'zbek</option>
          </select>
          <FaBars className="bars" onClick={handleClickNav} />
      </div>
    </div>
  );
};

export default Navbar;
