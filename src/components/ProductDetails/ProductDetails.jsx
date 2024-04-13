import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useTranslation } from "react-i18next";
import { IoStarSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const ProductDetails = ({ data }) => {
  const { name } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [BeforeContent, setBeforeContent] = useState(false);
  const [rating, setRating] = useState(0);
  const [firstName,setFirstName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const translatedName = t(name)

  
  const selectedCollection = data.find(
    (collection) =>  t(collection.name) ===  translatedName
  );

  if (!selectedCollection) {
    return <div>Loading...</div>;
  }
  const { img, productDetails, collectionName } = selectedCollection;

  const handleClickItem = () => {
    navigate(`/product-category/${t(collectionName)}`);
    window.scrollTo({ top: 0 });
  };

  const handleClickBeforeContent = () => {
    setBeforeContent(!BeforeContent);
  };
  const handleClickRating = (index) => {
    setRating(index + 1);
  };
  const sendTelegramBot = () => {
    const tg_bot_id = "6419502770:AAFqnnlYZUoPB_uzBfy8rk4-MjUqMgU5dQQ";
    const chat_id = 5716140595;
    const messageBot = `Name: ${firstName} \n Email: ${email} \n Feed Back Message: ${message}`;

    fetch(`https://api.telegram.org/bot${tg_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: messageBot,
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendTelegramBot()
    setFirstName("");
    setEmail("");
    setMessage("");
    toast.success(t("toast-success"),{
      position:"top-right",
      autoClose:2000
    })
  }

  return (
    <div className="selected-container">
      <div className="selected-cards">
        <div className="selected-card">
          <div className="selected-img">
            <img src={img} className="img" alt="" />
          </div>
          <div className="selected-table">
            <span className="selected-title">{t(name)}</span>
            <table className="table-container">
              <tr>
                <td>{t("Material")}:</td>
                <td>{t(productDetails?.material)}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Pillow case")}:</td>
                <td>{t(productDetails?.pillow_case)}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Bed sheet")}:</td>
                <td>{t(productDetails?.bed_sheet)}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Duvet cover")}:</td>
                <td>{t(productDetails?.duvet_cover)}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Size")}:</td>
                <td>{t(productDetails?.size)}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Manufacturer")}:</td>
                <td>{t(productDetails?.manufacturer)}</td>
              </tr>
            </table>
            <span className="category-name">
              <td>{t("Category")}:</td>
              <td><a onClick={handleClickItem}>{t(collectionName)}</a></td>
            </span>
          </div>
        </div>
        <hr />
        <div className="descr-review">
          <span
            className={`span-item ${BeforeContent ? "active" : ""}`}
            onClick={handleClickBeforeContent}
          >
            {t("description")}
          </span>
          <span
            className={`span-item ${!BeforeContent ? "active" : ""}`}
            onClick={handleClickBeforeContent}
          >
            {t("reviews")}(0)
          </span>
        </div>
        {BeforeContent ? (
          <div className="description-card">
            <h1 className="descr-title">{t("description")}</h1>
            <span className="descr-text-title">{t("descr-title")}</span>
            <p className="product-descr">{t(productDetails.description)}</p>
          </div>
        ) : (
          <div className="review-card">
            <h1 className="reviews">{t("reviews")}</h1>
            <p className="reviews-text">{t("review-comment")}</p>
            <div className="feedback-card">
              <div className="feedback-ratings">
                <span className="feedback-title">
                  {t("review-sorov")} {name} 
                </span>
                <span className="feedback-text">
                  {t("review-text")} *
                </span>
                <div className="ratings">
                  <span className="rating-text">{t("Your mark")} *</span>
                  <div className="feed-icons">
                    {[...Array(5)].map((_, index) => (
                      <IoStarSharp
                        key={index}
                        className={`star-icon ${
                          index < rating ? "active" : ""
                        }`}
                        onClick={() => handleClickRating(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="feedback-form">
                <div className="feedback-input-name inputs-card">
                  <label htmlFor="firstname">{t("firstname")}*</label>
                  <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="feedback-input"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="feedback-input-email inputs-card">
                  <label htmlFor="email">{t("email")}*</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="feedback-input"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="feedback-message">
                  <label htmlFor="message">{t("message")}*</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="10"
                    className="feedback-textarea"
                  ></textarea>
                </div>
                <button className="feedback-btn">{t("reviews-btn")}</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
