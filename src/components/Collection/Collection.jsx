import React, { useState } from "react";
import "./Collection.css";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import CollectionData from "../../Data/ProductData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useTranslation } from "react-i18next";

const Collection = ({ language }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(16);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [searchCollection, setSearchCollection] = useState("");
  const [filteredCollection, setFilteredCollection] = useState(
    CollectionData.filter((item) => item[language])
  );
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNextPage = () => {
    if (endIndex + 16 <= CollectionData.length) {
      setStartIndex((prev) => prev + 16);
      setEndIndex((prev) => prev + 16);
      setCurrentPage((prev) => prev + 1);
    } else {
      setStartIndex(CollectionData.length - 16);
      setEndIndex(CollectionData.length);
    }
  };

  const handleBackPage = () => {
    if (startIndex - 16 >= 1) {
      setStartIndex((prev) => prev - 16);
      setEndIndex((prev) => prev - 16);
      setCurrentPage((prev) => prev - 1);
    } else {
      setStartIndex(1);
      setEndIndex(16);
    }
  };

  if (currentPage < 0) {
    setCurrentPage(0);
    setStartIndex(1);
    setEndIndex(16);
  }

  const handleShowCategoryClick = () => {
    setShowCategory(!showCategory);
  };

  const handleCollectionClick = (collection) => {
    setSelectedCollection((prev) => (prev = collection));
    navigate(`/product/${collection[language].name}`);
    console.log(collection);
    window.scrollTo({ top: 0 });
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      item[language].name.toLowerCase().includes(searchText)
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
            placeholder={t("collection-search-placeholder")}
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
            <span className="title-collection">{t("nav-item2")}</span>
            {showCategory ? (
              <FaChevronDown className="icon-collection" />
            ) : (
              <FaChevronRight className="icon-collection" />
            )}
          </div>
          <div className={`shop-left-items ${showCategory ? "active" : ""}`}>
            {CollectionData.slice(0, 1).map((item, index) => (
              <a
                key={index}
                href={`/product-category/${item[language].collectionName}`}
                className="shop-left-link"
              >
                {t(item[language].collectionName)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="shop-right">
        <div className="shop-right-title">
          <div className="collection-length">
            <span className="uzunlik">{t("nav-item2")}</span>
            <span className="uzunlik">
              {/* Showing {startIndex}-{endIndex} of {CollectionData.length} */}
            </span>
          </div>
          <a href="/contact-us">
            <button className="right-buttons-contact">
              {t("contact-title")}
            </button>
          </a>
        </div>
        <div className="shop-right-cards">
          {filteredCollection
            .slice(startIndex - 1, endIndex)
            .map((collection, ind) => (
              <div
                className="shop-right-card"
                key={ind}
                onClick={() => handleCollectionClick(collection)}
              >
                <div className="shop-right-card-img">
                  <img src={collection[language].img} alt="" />
                </div>
                <span className="shop-right-card-text">
                  {collection[language].name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
