import React from "react"
import { useParams } from "react-router-dom"

const ProductDetails = ({data}) => {
  const {name} = useParams()
  const selectedCollection = data.find(collection => collection.name === name)

  if(!selectedCollection){
    return <div>Loading...</div>
  }
  const {img,productDetails} = selectedCollection
  
  return (
    <div className='selected-container'>
      <div className="selected-cards">
      
        <div className="selected-card">
          <div className="selected-img">
            <img src={img} alt="" />
          </div>
          <div className="selected-table">
            <span className="selected-title">{name}</span>
            <table className="table-container">
              <tr>
                <td>Material:</td>
                <td>{productDetails?.material}</td>
              </tr>
              <tr>
                <td>Pillow case:</td>
                <td>{productDetails?.pillow_case}</td>
              </tr>
              <tr>
                <td>Bed sheet:</td>
                <td>{productDetails?.bed_sheet}</td>
              </tr>
              <tr>
                <td>Duvet cover:</td>
                <td>{productDetails?.duvet_cover}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{productDetails?.size}</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>{productDetails?.manufacturer}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
