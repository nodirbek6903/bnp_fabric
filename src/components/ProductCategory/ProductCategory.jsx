import React, { useState } from "react";
import "./ProductCategory.css";
import { FaChevronRight, FaSearch, FaChevronDown } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProductCategory = ({ data }) => {
  const [showCategory, setShowCategory] = useState(false);
  const { collectionName } = useParams();
  const selectedCategory = data.filter(
    (category) => category.collectionName === collectionName
  );
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(16);
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredCollection, setFilteredCollection] =
    useState(selectedCategory);
  const [searchCollection, setSearchCollection] = useState("");
  const navigate = useNavigate();

  if (endIndex > selectedCategory.length) {
    setEndIndex(selectedCategory.length);
  }

  const handleNextPage = () => {
    if (endIndex + 16 <= selectedCategory.length) {
      setStartIndex((prev) => prev + 16);
      setEndIndex((prev) => prev + 16);
      setCurrentPage((prev) => prev + 1);
    } else {
      setStartIndex(selectedCategory.length - 16);
      setEndIndex(selectedCategory.length);
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
  const handleClickProduct = (category) => {
    navigate(`/product/${category.name}`);
    window.scrollTo({ top: 0 });
    console.log(category);
  };

  const handleSearchChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchCollection(searchText);
    const filtered = selectedCategory.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchText)
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
              href={`/product-category/Autumn Collection`}
              className="category-link"
            >
              <span className="category-item">Autumn Collection</span>
            </a>
            <a
              href={`/product-category/Spring Collection`}
              className="category-link"
            >
              <span className="category-item">Spring Collection</span>
            </a>
            <a
              href={`/product-category/Winter Collection`}
              className="category-link"
            >
              <span className="category-item">Winter Collection</span>
            </a>
            <a
              href={`/product-category/Summer Collection`}
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
            <span className="uzunlik">Collection</span>
            <span className="uzunlik">
              Showing {startIndex}-{endIndex} of {selectedCategory.length}
            </span>
          </div>
          <a href="/contact-us">
          <button className="right-buttons-contact">
            Contact
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
        {/* <div className="cards-length">
            <a href="/" className='length-item link-item'>
                    <span>1</span>
                </a>
                <a href="/" className='length-item link-item'>
                    <span>2</span>
                </a>
                <a href="/" className='length-item link-item'>
                    <span>3</span>
                </a>
                <a href="/" className='length-item link-item'>
                    <span>4</span>
                </a>
                <a href="/" className='length-item link-item'>
                    <span>5</span>
                </a>
                <a href="/" className='length-item'>
                    <span><MdArrowRightAlt /></span>
                </a>
            </div> */}
      </div>
    </div>
  );
};

export default ProductCategory;
