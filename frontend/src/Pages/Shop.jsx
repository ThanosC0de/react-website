import React from 'react'
import Hero from '../Componets/Hero/Hero'
import Popular from '../Componets/Popular/Popular'
import Offers from '../Componets/Offers/Offers'
import NewCollections from '../Componets/NewCollections/NewCollections'



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
    </div>
  )
}

export default Shop