import React from 'react'
import './AddProduct.css'
import upload from '../../Assets/upload_area.svg'

const AddProduct = () => {
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input type="text" name='name' placeholder='type here' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input type="text" name='old_price' placeholder='type here'/>
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input type="text" name='new_price' placeholder='type here'/>
          </div>
        </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
    <div className="addproduct-itemfield">
      <label htmlFor='file-input'>
        <img src={upload} className='adproduct-thumnail-img' alt="" />
      </label>
      <input type='file' name='image' id='file-input' hidden/>
    </div>
    <button className='addproduct-btn'>Add</button>

    </div>
  )
}

export default AddProduct