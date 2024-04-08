import React from "react";
import "./About.css";
import AboutImg from "../../images/aboutimg.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <span className="left-title">Bukhara Natural Product</span>
        <div className="left-texts">
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory
            has been a company that produces cotton fabrics for use all over the
            world for many years.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company
            has been serving customers for 17 years.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main
            goal of this company is to produce high quality and cost effective
            products.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe
            production process of this company is completely environmentally
            friendly.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company
            can produce any types of cotton raw materials according to the
            requirements and suggestions of customers.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company
            is the official dealer of DongJia weaving machines in Uzbekistan.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently,
            more than 80 families contribute to the prestige and success of the
            company by providing financially for their families.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this
            demand, 50 looms are running at high speed, non-stop.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the
            capacity to weave 200-250,000 meters of fabric per month.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn
            accordance with the high demand of our customers, the company has
            now launched the production of high-quality premium eco-bags.
          </span>
          <span className="left-text">
            Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara
            Natural Product Company is pleased to serve its loyal customers at
            any time.
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
