import React from "react"

const ProductDetails = ({collection}) => {
  if(!collection){
    console.log(collection)
    return(
      <div>
        <p>Malumot topilmadi!</p>
      </div>
    )
  }
  
  return (
    <div className='selected-container'>
      <div className="selected-cards">
      
        <div className="selected-card">
          <div className="selected-img">
            <img src={collection.img} alt="" />
          </div>
          <div className="selected-table">
            <span className="selected-title">{collection.name}</span>
            <table className="table-container">
              <tr>
                <td>Material:</td>
                <td>{collection?.productDetails?.material}</td>
              </tr>
              <tr>
                <td>Pillow case:</td>
                <td>{collection?.productDetails?.pillow_case}</td>
              </tr>
              <tr>
                <td>Bed sheet:</td>
                <td>{collection?.productDetails?.bed_sheet}</td>
              </tr>
              <tr>
                <td>Duvet cover:</td>
                <td>{collection?.productDetails?.duvet_cover}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{collection?.productDetails?.size}</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>{collection?.productDetails?.manufacturer}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
