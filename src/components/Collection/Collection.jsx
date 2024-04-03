import React, { useState } from "react";
import "./Collection.css";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import CollectionData from "../../Data/ProductData";
import { MdArrowRightAlt } from "react-icons/md";

const Collection = () => {
  const [showCategory, setShowCategory] = useState(false);

  const handleShowCategoryClick = () => {
    setShowCategory(!showCategory);
  };
  return (
    <div className="shop-container">
      <div className="shop-left">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
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
              (item) => item.collectionName === "Autumn Collection"
            ) && (
              <a
                href={`/product-category/Autumn Collection`}
                className="shop-left-link"
              >
                Autumn Collection
              </a>
            )}

            {CollectionData.find(
              (item) => item.collectionName === "Spring Collection"
            ) && (
              <a
                href={`/product-category/Spring Collection`}
                className="shop-left-link"
              >
                Spring Collection
              </a>
            )}

            {CollectionData.find(
              (item) => item.collectionName === "Winter Collection"
            ) && (
              <a
                href={`/product-category/Winter Collection`}
                className="shop-left-link"
              >
                Winter Collection
              </a>
            )}

            {CollectionData.find(
              (item) => item.collectionName === "Summer Collection"
            ) && (
              <a
                href={`/product-category/Summer Collection`}
                className="shop-left-link"
              >
                Summer Collection
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="shop-right">
        <div className="shop-right-title">
          <div className="collection-length">
            <span>Collection</span>
            <span>Showing 1-16 of {CollectionData.length}</span>
          </div>
          <select className="right-select">
            <option className="select-item" value="initialsort">
              Initial sort
            </option>
            <option className="select-item" value="bypopularity">
              By popularity
            </option>
            <option className="select-item" value="byrating">
              By rating
            </option>
            <option className="select-item" value="bynovelty">
              By novelty
            </option>
            <option className="select-item" value="ascending">
              Prices:ascending
            </option>
            <option className="select-item" value="descending">
              Prices:descending
            </option>
          </select>
        </div>
        <div className="shop-right-cards">
          {CollectionData.map((collection, ind) => (
            <div className="shop-right-card" key={ind}>
              <div className="shop-right-card-img">
                <img src={collection.img} alt="" />
              </div>
              <span className="shop-right-card-text">{collection.name}</span>
            </div>
          ))}
        </div>
        <div className="shop-right-cards-length">
          <a href="/" className="length-item link-item">
            <span>1</span>
          </a>
          <a href="/" className="length-item link-item">
            <span>2</span>
          </a>
          <a href="/" className="length-item link-item">
            <span>3</span>
          </a>
          <a href="/" className="length-item link-item">
            <span>4</span>
          </a>
          <a href="/" className="length-item link-item">
            <span>5</span>
          </a>
          <a href="/" className="length-item">
            <span>
              <MdArrowRightAlt />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collection;
