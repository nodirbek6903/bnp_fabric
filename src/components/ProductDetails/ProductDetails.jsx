import React from "react"
// import { useSelector } from "react-redux"

const ProductDetails = ({selectedCollection}) => {
  // const selectedCollection = useSelector(state => state.productDetails.selectedCollection)
  // console.log(selectedCollection)

  if(!selectedCollection){
    return <div>Loading...</div>
  }
  
  return (
    <div className='selected-container'>
      <div className="selected-cards">
      
        <div className="selected-card">
          <div className="selected-img">
            <img src={selectedCollection.img} alt="" />
          </div>
          <div className="selected-table">
            <span className="selected-title">{selectedCollection.name}</span>
            <table className="table-container">
              <tr>
                <td>Material:</td>
                <td>{selectedCollection?.productDetails?.material}</td>
              </tr>
              <tr>
                <td>Pillow case:</td>
                <td>{selectedCollection?.productDetails?.pillow_case}</td>
              </tr>
              <tr>
                <td>Bed sheet:</td>
                <td>{selectedCollection?.productDetails?.bed_sheet}</td>
              </tr>
              <tr>
                <td>Duvet cover:</td>
                <td>{selectedCollection?.productDetails?.duvet_cover}</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>{selectedCollection?.productDetails?.size}</td>
              </tr>
              <tr>
                <td>Manufacturer:</td>
                <td>{selectedCollection?.productDetails?.manufacturer}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDetails
