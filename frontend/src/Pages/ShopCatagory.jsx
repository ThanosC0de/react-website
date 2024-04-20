import React, { useContext } from 'react'
import '/CSS/ShopCatagory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCatagory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopCatagory