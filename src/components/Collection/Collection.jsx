import React, { useState } from "react";
import "./Collection.css";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import CollectionData from "../../Data/ProductData";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useTranslation } from 'react-i18next';

const Collection = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [searchCollection, setSearchCollection] = useState("");
  const [filteredCollection, setFilteredCollection] = useState(
    CollectionData.filter((item) => item)
  );


  const handleShowCategoryClick = () => {
    setShowCategory(!showCategory);
  };

  const handleCollectionClick = (collection) => {
    setSelectedCollection((prev) => (prev = collection));
    navigate(`/product/${collection.name}`);
    console.log(collection);
    window.scrollTo({ top: 0 });
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setFilteredCollection(filtered);
  };

  if (selectedCollection) {
    return <ProductDetails selectedCollection={selectedCollection} />;
  }

  return (
    <div className="shop-container">
      <div className="shop-left">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
            value={searchCollection}
            onChange={handleSearchChange}
            autoComplete="off"
          />
          <div className="icon-con">
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="shop-left-dropdown">
          <div className="shop-left-title" onClick={handleShowCategoryClick}>
            <span className="title-collection">Collection</span>
            {showCategory ? (
              <FaChevronDown className="icon-collection" />
            ) : (
              <FaChevronRight className="icon-collection" />
            )}
          </div>
          <div className={`shop-left-items ${showCategory ? "active" : ""}`}>
                        {CollectionData.find(
              (item) => item.collectionName === "Spring Collection"
            ) && (
              <a
                href={`/product-category/Spring Collection`}
                className="shop-left-link"
              >
                {t("main-collectionName4")}
              </a>
            )}

            {CollectionData.find(
              (item) => item.collectionName === "Winter Collection"
            ) && (
              <a
                href={`/product-category/Winter Collection`}
                className="shop-left-link"
              >
                {t("main-collectionName1")}
              </a>
            )}

            {CollectionData.find(
              (item) => item.collectionName === "Summer Collection"
            ) && (
              <a
                href={`/product-category/Summer Collection`}
                className="shop-left-link"
              >
                {t("main-collectionName3")}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="shop-right">
        <div className="shop-right-title">
          <div className="collection-length">
            <span className="uzunlik">Collection</span>
          </div>
          <a href="/contact-us">
            <button className="right-buttons-contact">{t("contact-title")}</button>
          </a>
        </div>
        <div className="shop-right-cards">
          {filteredCollection
            .map((collection, ind) => (
              <div
                className="shop-right-card"
                key={ind}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className="shop-right-card-img">
                  <img src={collection.img} alt="" />
                </div>
                <span className="shop-right-card-text">
                  {collection.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
