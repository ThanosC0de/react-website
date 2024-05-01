import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addproducticon from '../../Assets/Product_Cart.svg'
import listproducticon from '../../Assets/Product_list_icon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={addproducticon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: "none"}}>
            <div className="sidebar-item">
                <img src={listproducticon} alt="" />
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar