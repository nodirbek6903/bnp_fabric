import React, { useState } from "react";
import "./Navbar.css";
import NavLogo from "../../images/nav-logo.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

<<<<<<< HEAD
const Navbar = ({ changeLanguage, language }) => { 
  const [showNavbar, setShowNavbar] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClickNav = () => {
    setShowNavbar(!showNavbar);
  };

  const handleChangeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    changeLanguage(selectedLanguage);
  };

  const location = useLocation();
=======
const Navbar = () => {
  const [showNavbar,setShowNavbar] = useState(false)

  const handleClickNav = () => {
    setShowNavbar(!showNavbar)
  }
>>>>>>> parent of 3bb7cb6 (language 50% added)

  return (
    <div className="nav-container">
      <div className="container">
        <div className="nav-logo-items">
          <div className="nav-logo">
            <a href="/">
              <img src={NavLogo} alt="Logo" />
            </a>
          </div>
          <div className={`nav-items ${showNavbar ? "active" : ""}`}>
            <FaTimes className="close" onClick={handleClickNav} />
<<<<<<< HEAD
            <Link
              to="/"
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              {t("nav-item1")}
            </Link>
            <Link
              to="/shop"
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/shop" ? "active" : ""
              }`}
            >
              {t("nav-item2")}
            </Link>
            <Link
              to="/about-us"
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/about-us" ? "active" : ""
              }`}
            >
              {t("nav-item3")}
            </Link>
            <Link
              to="/contact-us"
              onClick={handleClickNav}
              className={`nav-item ${
                location.pathname === "/contact-us" ? "active" : ""
              }`}
            >
              {t("nav-item4")}
            </Link>
          </div>
        </div>
        <select
          className="languages"
          onChange={handleChangeLanguage}
          value={language} // Tilni tanlangan holatga solish
          name="language"
          id=""
        >
          <option value="en">English</option>
          <option value="ru">Russian</option>
          <option value="uz">O'zbek</option>
        </select>
        <FaBars className="bars" onClick={handleClickNav} />
=======
            <Link to="/" onClick={handleClickNav} className={`nav-item ${location.pathname==="/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/shop" onClick={handleClickNav} className={`nav-item ${location.pathname==="/shop" ? "active" : ""}`}>
              Collection
            </Link>
            <Link to="/about-us" onClick={handleClickNav} className={`nav-item ${location.pathname==="/about-us" ? "active" : ""}`}>
              About Us
            </Link>
            <Link to="/contact-us" onClick={handleClickNav} className={`nav-item ${location.pathname==="/contact-us" ? "active" : ""}`}>
              Contacts
            </Link>
          </div>
        </div>
          <select className="languages" name="language" id="">
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="uz">O'zbek</option>
          </select>
          <FaBars className="bars" onClick={handleClickNav} />
>>>>>>> parent of 3bb7cb6 (language 50% added)
      </div>
    </div>
  );
};

export default Navbar;
