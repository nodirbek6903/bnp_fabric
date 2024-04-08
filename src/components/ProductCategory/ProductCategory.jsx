import React, { useEffect, useState } from "react";
import "./ProductCategory.css";
import { FaChevronRight, FaSearch, FaChevronDown } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CollectionData from "../../Data/ProductData";

const ProductCategory = ({ data }) => {
  const [showCategory, setShowCategory] = useState(false);
  const { collectionName } = useParams();
  const { t } = useTranslation();
  const [filteredCollection, setFilteredCollection] = useState(
    data.filter((item) => t(item.collectionName) === collectionName)
  );
  const [searchCollection, setSearchCollection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const selectedCategory = data.filter(
      (category) => t(category.collectionName) === collectionName
    );
    setFilteredCollection(selectedCategory);
  }, [collectionName]);

  const handleClickProduct = (category) => {
    navigate(`/product/${t(category.name)}`);
    window.scrollTo({ top: 0 });
    console.log(category);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      t(item.name).toLowerCase().includes(searchText)
    );
    setFilteredCollection(filtered);
  };

  const handleItem1 = () => {
    navigate(`/product-category/${t("main-collectionName2")}`);
    window.scrollTo({top:0})
  };
  const handleItem2 = () => {
    navigate(`/product-category/${t("main-collectionName4")}`);
    window.scrollTo({top:0})
  };
  const handleItem3 = () => {
    navigate(`/product-category/${t("main-collectionName1")}`);
    window.scrollTo({top:0})
  };
  const handleItem4 = () => {
    navigate(`/product-category/${t("main-collectionName3")}`);
    window.scrollTo({top:0})
  };

  const handlShowCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div className="category-section">
      <div className="category-left">
        <div className="search-input-container">
          <input
            type="text"
            placeholder={t("collection-search-placeholder")}
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
            <span className="title-collection">{t("nav-item2")}</span>
            {showCategory ? (
              <FaChevronDown className="icon-collection" />
            ) : (
              <FaChevronRight className="icon-collection" />
            )}
          </div>
          <div className={`category-items ${showCategory ? "active" : null}`}>
            <a className="category-link" onClick={handleItem1}>
              <span className="category-item">{t("main-collectionName2")}</span>
            </a>
            <a className="category-link" onClick={handleItem2}>
              <span className="category-item">{t("main-collectionName4")}</span>
            </a>
            <a className="category-link" onClick={handleItem3}>
              <span className="category-item">{t("main-collectionName1")}</span>
            </a>
            <a className="category-link" onClick={handleItem4}>
              <span className="category-item">{t("main-collectionName3")}</span>
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
              <span className="right-card-text">{t(category.name)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
