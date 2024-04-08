import React, { useState } from "react";
import "./ProductCategory.css";
import { FaChevronRight, FaSearch, FaChevronDown } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CollectionData from "../../Data/ProductData";

const ProductCategory = ({ data }) => {
  const [showCategory, setShowCategory] = useState(false);
  const { collectionName } = useParams();
  const { t } = useTranslation();
  const selectedCategory = data.filter(
    (category) => category.collectionName === collectionName
  );
  const [filteredCollection, setFilteredCollection] = useState(selectedCategory);
  const [searchCollection, setSearchCollection] = useState("");
  const navigate = useNavigate();

  console.log(selectedCategory);

  const handleClickProduct = (category) => {
    navigate(`/product/${category.name}`);
    window.scrollTo({ top: 0 });
    console.log(category);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setFilteredCollection(filtered);
  };

  if (!selectedCategory) {
    <div>Loading...</div>;
  }

  const handlShowCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div className="category-section">
      <div className="category-left">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search here"
            value={searchCollection}
            onChange={handleSearchChange}
            className="search-input"
            autoComplete="off"
          />
          <div className="icon-con">
            <FaSearch className="search-icon" />
          </div>
        </div>
        <div className="category-dropdown">
          <div className="category-title" onClick={handlShowCategory}>
            <span className="title-collection">Collection</span>
            {showCategory ? (
              <FaChevronDown className="icon-collection" />
            ) : (
              <FaChevronRight className="icon-collection" />
            )}
          </div>
          <div className={`category-items ${showCategory ? "active" : null}`}>
            <a
              href={`/product-category/${t("main-collectionName2")}`}
              className="category-link"
            >
              <span className="category-item">Autumn Collection</span>
            </a>
            <a
              href={`/product-category/${t("main-collectionName4")}`}
              className="category-link"
            >
              <span className="category-item">Spring Collection</span>
            </a>
            <a
              href={`/product-category/${t("main-collectionName1")}`}
              className="category-link"
            >
              <span className="category-item">Winter Collection</span>
            </a>
            <a
              href={`/product-category/${t("main-collectionName3")}`}
              className="category-link"
            >
              <span className="category-item">Summer Collection</span>
            </a>
          </div>
        </div>
      </div>
      <div className="category-right">
        <div className="right-title">
          <div className="collection-length">
            <span className="uzunlik">{t("nav-item2")}</span>
          </div>
          <a href="/contact-us">
            <button className="right-buttons-contact">
              {t("contact-title")}
            </button>
          </a>
        </div>
        <div className="right-cards">
          {filteredCollection.map((category, ind) => (
            <div
              className="right-card"
              key={ind}
              onClick={() => handleClickProduct(category)}
            >
              <div className="right-card-img">
                <img src={category.img} alt="" />
              </div>
              <span className="right-card-text">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
