import React from "react";
import "./About.css";
import AboutImg from "../../images/aboutimg.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()
  return (
    <div className="about-container">
      <div className="about-left">
        <span className="left-title">{t("about-section-title")}</span>
        <div className="left-texts">
          <span className="left-text">
          {t("about-section-text1")}
          </span>
          <span className="left-text">
          {t("about-section-text2")}
          </span>
          <span className="left-text">
          {t("about-section-text3")}
          </span>
          <span className="left-text">
          {t("about-section-text4")}
          </span>
          <span className="left-text">
          {t("about-section-text5")}
          </span>
          <span className="left-text">
          {t("about-section-text6")}
          </span>
          <span className="left-text">
          {t("about-section-text7")}
          </span>
          <span className="left-text">
          {t("about-section-text8")}
          </span>
          <span className="left-text">
          {t("about-section-text9")}
          </span>
          <span className="left-text">
          {t("about-section-text10")}
          </span>
          <span className="left-text">
          {t("about-section-text11")}
          </span>
        </div>
      </div>
      <div className="about-right">
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
