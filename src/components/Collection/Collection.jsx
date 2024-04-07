import React, { useState } from "react";
import "./Collection.css";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";
import CollectionData from "../../Data/ProductData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const Collection = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(16);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [searchCollection, setSearchCollection] = useState("");
  const [filteredCollection, setFilteredCollection] = useState(CollectionData);
  const navigate = useNavigate();

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
    navigate(`/product/${collection.name}`);
    console.log(collection);
    window.scrollTo({ top: 0 });
  };
  // qidiruv uchun

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = CollectionData.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchText)
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
            <span className="uzunlik">Collection</span>
            <span className="uzunlik">
              Showing {startIndex}-{endIndex} of {CollectionData.length}
            </span>
          </div>
          <a href="/contact-us">
            <button className="right-buttons-contact">Contact</button>
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
                  <img src={collection.img} alt="" />
                </div>
                <span className="shop-right-card-text">{collection.name}</span>
              </div>
            ))}
        </div>
        {/* <div className="shop-right-cards-length">
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
          <a
            className="length-item"
            onClick={handleBackPage}
          >
            <span>
              <FaArrowLeftLong />
            </span>
          </a>
          <a
            className="length-item"
            onClick={handleNextPage}
          >
            <span>
              <FaArrowRightLong />
            </span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Collection;
