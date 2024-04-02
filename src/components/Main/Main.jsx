import React, { useState } from "react";
import "./Main.css";
import MainImg from "../../images/main.png";
import Autumn from "../../images/autumn.png"
import Summer from "../../images/summer.png"
import AboutIcon1 from "../../images/main-icon1.svg";
import AboutIcon2 from "../../images/main-icon2.svg";
import AboutIcon3 from "../../images/main-icon3.svg";
import AboutIcon4 from "../../images/main-icon4.svg";
import Winter from "../../images/main2.png";
import WinterCollection from "./../../Data/ProductData";
import {useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const Main = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const navigate = useNavigate();

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
    navigate(`/product/${collection.name}`,{state: {collection}});
    console.log(collection);
  };

  if(selectedCollection) {
    return <ProductDetails collection={selectedCollection} />
  }
  return (
    <div className="main-container">
      <div className="main">
        <div className="main-img">
          <img src={MainImg} alt="" />
        </div>
        <div className="main-texts">
          <h3 className="main-text">Bukhara</h3>
          <h2 className="main-text">Natural</h2>
          <h1 className="main-text">Product</h1>
        </div>
      </div>
      <div className="main-about">
        <div className="main-about-cards">
          <div className="about-card">
            <img src={AboutIcon1} alt="" />
            <div className="about-texts">
              <span className="about-title">Free shipping</span>
              <p className="about-descr">Free shipping on all orders</p>
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon2} alt="" />
            <div className="about-texts">
              <span className="about-title">Return Guarante</span>
              <p className="about-descr">30 day money back</p>
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon3} alt="" />
            <div className="about-texts">
              <span className="about-title">Online support 24/7</span>
              <p className="about-descr">Technical support 24/7</p>
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon4} alt="" />
            <div className="about-texts">
              <span className="about-title">Secure payment</span>
              <p className="about-descr">All payment methods accepted</p>
            </div>
          </div>
        </div>
      </div>
      <div className="winter-collections">
      <div className="main-product">
        <div className="product winter">
          <div className="product-card">
            <span className="foiz">100%</span>
            <span className="product-text">Material quality</span>
          </div>
          <div className="product-img">
            <img src={Winter} alt="" />
          </div>
          <div className="product-card">
            <span className="product-title">'Bukhara Natural Product'</span>
            <span className="product-text">
              has been a company that produces cotton fabrics for use all over
              the world for many years
            </span>
            <div className="product-btn">
              <a href="/shop" className="btn">
                Collection
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="winter-collection">
        <div className="collection-title">
          <span className="title">Winter Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {WinterCollection.map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
              </div>
              <span className="collection-name">{collection.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="autumn-collections">
      <div className="main-product">
        <div className="product autumn">
          <div className="product-card">
            <span className="foiz">100%</span>
            <span className="product-text">Material quality</span>
          </div>
          <div className="product-img">
            <img src={Autumn} alt="" />
          </div>
          <div className="product-card">
            <span className="product-title">'Bukhara Natural Product'</span>
            <span className="product-text">
              has been a company that produces cotton fabrics for use all over
              the world for many years
            </span>
            <div className="product-btn">
              <a href="/shop" className="btn">
                Collection
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="winter-collection">
        <div className="collection-title">
          <span className="title">Autumn Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {WinterCollection.map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
              </div>
              <span className="collection-name">{collection.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="summer-collections">
      <div className="main-product">
        <div className="product summer">
          <div className="product-card">
            <span className="foiz">100%</span>
            <span className="product-text">Material quality</span>
          </div>
          <div className="product-img">
            <img src={Summer} alt="" />
          </div>
          <div className="product-card">
            <span className="product-title">'Bukhara Natural Product'</span>
            <span className="product-text">
              has been a company that produces cotton fabrics for use all over
              the world for many years
            </span>
            <div className="product-btn">
              <a href="/shop" className="btn">
                Collection
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="winter-collection">
        <div className="collection-title">
          <span className="title">Summer Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {WinterCollection.map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
              </div>
              <span className="collection-name">{collection.name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
