import React, { useState } from 'react'
import "./ProductCategory.css"
import {FaChevronRight, FaSearch, FaChevronDown} from "react-icons/fa"
import { MdArrowRightAlt } from "react-icons/md";
import Img from "../../images/SummerCollection1.jpg"

const ProductCategory = () => {
    const [showCategory,setShowCategory] = useState(false)

    const handlShowCategory = () => {
        setShowCategory(!showCategory)
    }
  return (
    <div className='category-section'>
        <div className="category-left">
            <div className="search-input-container">
                <input type="text" placeholder='Search here' className='search-input' autoComplete='off' />
                <div className="icon-con">
                <FaSearch className='search-icon' />
                </div>
            </div>
            <div className="category-dropdown">
                <div className="category-title" onClick={handlShowCategory}>
                    <span className="title-collection">Collection</span>
                    {showCategory ? <FaChevronDown className='icon-collection' /> : <FaChevronRight className='icon-collection' />}
                </div>
                <div className={`category-items ${showCategory ? "active" : null}`}>
                    <a href="/product-category/" className="category-link"><span className="category-item">Spring Collection</span></a>
                    <a href="/product-category/" className="category-link"><span className="category-item">Winter Collection</span></a>
                    <a href="/product-category/" className="category-link"><span className="category-item">Summer Collection</span></a>
                    <a href="/product-category/" className="category-link"><span className="category-item">Autumn Collection</span></a>
                </div>
            </div>
        </div>
        <div className="category-right">
            <div className="right-title">
                <div className="collection-length">
                    <span>Collection</span>
                    <span>Showing 1-16 of 76</span>
                </div>
                <select className="right-select">
                    <option className='select-item' value="initialsort">Initial sort</option>
                    <option className='select-item' value="bypopularity">By popularity</option>
                    <option className='select-item' value="byrating">By rating</option>
                    <option className='select-item' value="bynovelty">By novelty</option>
                    <option className='select-item' value="ascending">Prices:ascending</option>
                    <option className='select-item' value="descending">Prices:descending</option>
                </select>
            </div>
            <div className="right-cards">
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
                <div className="right-card">
                    <div className="right-card-img">
                        <img src={Img} alt="" />
                    </div>
                    <span className="right-card-text">
                        Squares
                    </span>
                </div>
            </div>
            <div className="cards-length">
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
            </div>
        </div>
    </div>
  )
}

export default ProductCategory