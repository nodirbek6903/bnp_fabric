import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import { useTranslation } from "react-i18next";

const ProductDetails = ({ data }) => {
  const { name } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const selectedCollection = data.find(
    (collection) => t(collection.name) === name
  );

  if (!selectedCollection) {
    return <div>Loading...</div>;
  }
  const { img, productDetails, collectionName } = selectedCollection;

  const handleClickItem = () => {
    navigate(`/product-category/${t(collectionName)}`);
    window.scrollTo({ top: 0 });
  };

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
                <td>{productDetails?.material}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Pillow case")}:</td>
                <td>{productDetails?.pillow_case}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Bed sheet")}:</td>
                <td>{productDetails?.bed_sheet}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Duvet cover")}:</td>
                <td>{productDetails?.duvet_cover}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Size")}:</td>
                <td>{productDetails?.size}</td>
              </tr>
              <hr />
              <tr>
                <td>{t("Manufacturer")}:</td>
                <td>{productDetails?.manufacturer}</td>
              </tr>
            </table>
            <span className="category-name">
              {t("Category")}:{" "}
              <a onClick={handleClickItem}>{t(collectionName)}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
