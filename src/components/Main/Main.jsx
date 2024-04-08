import React, { useState } from "react";
import "./Main.css";
import MainImg from "../../images/main.png";
import Autumn from "../../images/autumn.png";
import Summer from "../../images/summer.png";
import AboutIcon1 from "../../images/main-icon1.svg";
import AboutIcon2 from "../../images/main-icon2.svg";
import AboutIcon3 from "../../images/main-icon3.svg";
import AboutIcon4 from "../../images/main-icon4.svg";
import Winter from "../../images/main2.png";
import CollectionData from "./../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const Main = ({ language }) => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const navigate = useNavigate();
<<<<<<< HEAD
  const { t } = useTranslation();
=======
>>>>>>> parent of 3bb7cb6 (language 50% added)

  const handleCollectionClick = (collection) => {
    setSelectedCollection((prev) => prev = collection);
    navigate(`/product/${collection[language].name}`);
    window.scrollTo({ top: 0 });
  };
  

  if (selectedCollection) {
    return <ProductDetails selectedCollection={selectedCollection} language={language} />;
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
            <img src={AboutIcon1} className="about-img" alt="" />
            <div className="about-texts">
<<<<<<< HEAD
              <span className="about-title">
                {t("main-section2-card-title1")}
              </span>
              <p className="about-descr">{t("main-section2-card-text1")}</p>
=======
              <span className="about-title">Free shipping</span>
              <p className="about-descr">Free shipping on all orders</p>
>>>>>>> parent of 3bb7cb6 (language 50% added)
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon2} className="about-img" alt="" />
            <div className="about-texts">
<<<<<<< HEAD
              <span className="about-title">
                {t("main-section2-card-title2")}
              </span>
              <p className="about-descr">{t("main-section2-card-text2")}</p>
=======
              <span className="about-title">Return Guarante</span>
              <p className="about-descr">30 day money back</p>
>>>>>>> parent of 3bb7cb6 (language 50% added)
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon3} className="about-img" alt="" />
            <div className="about-texts">
<<<<<<< HEAD
              <span className="about-title">
                {t("main-section2-card-title3")}
              </span>
              <p className="about-descr">{t("main-section2-card-text3")}</p>
=======
              <span className="about-title">Online support 24/7</span>
              <p className="about-descr">Technical support 24/7</p>
>>>>>>> parent of 3bb7cb6 (language 50% added)
            </div>
          </div>
          <div className="about-card">
            <img src={AboutIcon4} className="about-img" alt="" />
            <div className="about-texts">
<<<<<<< HEAD
              <span className="about-title">
                {t("main-section2-card-title4")}
              </span>
              <p className="about-descr">{t("main-section2-card-text4")}</p>
=======
              <span className="about-title">Secure payment</span>
              <p className="about-descr">All payment methods accepted</p>
>>>>>>> parent of 3bb7cb6 (language 50% added)
            </div>
          </div>
        </div>
      </div>
      <div className="winter-collections fullCollection">
<<<<<<< HEAD
        <div className="main-product">
          <div className="product winter">
            <div className="product-card">
              <span className="foiz">100%</span>
              <span className="product-text">
                {t("main-section-umumiy-card-text1")}
              </span>
            </div>
            <div className="product-img">
              <img src={Winter} alt="" />
            </div>
            <div className="product-card">
              <span className="product-title">
                '{t("main-section-umumiy-card-title")}'
              </span>
              <span className="product-text">
                {t("main-section-umumiy-card-text2")}
              </span>
              <div className="product-btn">
                <a href="/shop" className="btn">
                  {t("main-section-umumiy-card-button")}
                </a>
=======
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
      <div className="collection">
        <div className="collection-title">
          <span className="title">Winter Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {CollectionData.filter(item => item.collectionName === "Winter Collection").map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
>>>>>>> parent of 3bb7cb6 (language 50% added)
              </div>
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="collection-title">
            <span className="title">{t("main-collectionName1")}</span>
            <div className="brend-text">{t("main-brend")}</div>
          </div>
          <div className="collection-cards">
            {CollectionData.filter(
              (item) =>
                item[language].collectionName === "Winter Collection" ||
                item[language].collectionName === "Зимняя коллекция" ||
                item[language].collectionName === "Qish kolleksiyasi"
            ).map((collection, ind) => (
              <div
                className="collection-card"
                key={ind}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className="collection-img">
                  <img src={collection[language].img} alt="" />
                </div>
                <span className="collection-name">
                  {collection[language].name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="autumn-collections fullCollection">
<<<<<<< HEAD
        <div className="main-product">
          <div className="product autumn">
            <div className="product-card">
              <span className="foiz">100%</span>
              <span className="product-text">
                {t("main-section-umumiy-card-text1")}
              </span>
            </div>
            <div className="product-img">
              <img src={Autumn} alt="" />
            </div>
            <div className="product-card">
              <span className="product-title">
                '{t("main-section-umumiy-card-title")}'
              </span>
              <span className="product-text">
                {t("main-section-umumiy-card-text2")}
              </span>
              <div className="product-btn">
                <a href="/shop" className="btn">
                  {t("main-section-umumiy-card-button")}
                </a>
=======
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
      <div className="collection">
        <div className="collection-title">
          <span className="title">Autumn Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {CollectionData.filter(item=> item.collectionName==="Autumn Collection").map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
>>>>>>> parent of 3bb7cb6 (language 50% added)
              </div>
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="collection-title">
            <span className="title">{t("main-collectionName2")}</span>
            <div className="brend-text">{t("main-brend")}</div>
          </div>
          <div className="collection-cards">
            {CollectionData.filter(
              (item) =>
                item[language].collectionName === "Autumn Collection" ||
                item[language].collectionName === "Осенняя коллекция" ||
                item[language].collectionName === "Kuz kolleksiyasi"
            ).map((collection, ind) => (
              <div
                className="collection-card"
                key={ind}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className="collection-img">
                  <img src={collection[language].img} alt="" />
                </div>
                <span className="collection-name">
                  {t(collection[language].name)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="summer-collections fullCollection">
<<<<<<< HEAD
        <div className="main-product">
          <div className="product summer">
            <div className="product-card">
              <span className="foiz">100%</span>
              <span className="product-text">
                {t("main-section-umumiy-card-text1")}
              </span>
            </div>
            <div className="product-img">
              <img src={Summer} alt="" />
            </div>
            <div className="product-card">
              <span className="product-title">
                '{t("main-section-umumiy-card-title")}'
              </span>
              <span className="product-text">
                {t("main-section-umumiy-card-text2")}
              </span>
              <div className="product-btn">
                <a href="/shop" className="btn">
                  {t("main-section-umumiy-card-button")}
                </a>
=======
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
      <div className="collection">
        <div className="collection-title">
          <span className="title">Summer Collection</span>
          <div className="brend-text">Bukhara Natural Product</div>
        </div>
        <div className="collection-cards">
          {CollectionData.filter(item => item.collectionName==="Summer Collection").map((collection, ind) => (
            <div
              className="collection-card"
              key={ind}
              onClick={() => handleCollectionClick(collection)}
            >
              <div className="collection-img">
                <img src={collection.img} alt="" />
>>>>>>> parent of 3bb7cb6 (language 50% added)
              </div>
            </div>
          </div>
        </div>
        <div className="collection">
          <div className="collection-title">
            <span className="title">{t("main-collectionName3")}</span>
            <div className="brend-text">{t("main-brend")}</div>
          </div>
          <div className="collection-cards">
            {CollectionData.filter(
              (item) =>
                item[language].collectionName === "Summer Collection" ||
                item[language].collectionName ===
                  "Yoz kolleksiyasi" ||
                item[language].collectionName === "Летняя коллекция"
            ).map((collection, ind) => (
              <div
                className="collection-card"
                key={ind}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className="collection-img">
                  <img src={collection.img} alt="" />
                </div>
                <span className="collection-name">
                  {collection[language].name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
