import React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import { useTranslation } from "react-i18next"

const ProductDetails = ({data}) => {
  const {name} = useParams()
  const selectedCollection = data.find(collection => collection.name)
  const {t} = useTranslation()

  if(!selectedCollection){
    return <div>Loading...</div>
  }
  const {img,productDetails,collectionName} = selectedCollection
  
  return (
    <div className='selected-container'>
      <div className="selected-cards">
        <div className="selected-card">
          <div className="selected-img">
            <img src={img} className="img" alt="" />
          </div>
          <div className="selected-table">
            <span className="selected-title">{name}</span>
            <table className="table-container">
              <tr>
                <td>Material:</td>
                <td>{productDetails?.material}</td>
              </tr>
              <hr />
              <tr>
                <td>Pillow case:</td>
                <td>{productDetails?.pillow_case}</td>
              </tr>
              <hr />
              <tr>
                <td>Bed sheet:</td>
                <td>{productDetails?.bed_sheet}</td>
              </tr>
              <hr />
              <tr>
                <td>Duvet cover:</td>
                <td>{productDetails?.duvet_cover}</td>
              </tr>
              <hr />
              <tr>
                <td>Size:</td>
                <td>{productDetails?.size}</td>
              </tr>
              <hr />
              <tr>
                <td>Manufacturer:</td>
                <td>{productDetails?.manufacturer}</td>
              </tr>
            </table>
            <span className="category-name">Category: <a href={`/product-category/${collectionName}`}>{collectionName}</a></span>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
