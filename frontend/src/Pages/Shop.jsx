import React from 'react'
import Hero from '../Componets/Hero/Hero'
import Popular from '../Componets/Popular/Popular'
import Offers from '../Componets/Offers/Offers'
import NewCollections from '../Componets/NewCollections/NewCollections'
import NewsLetter from '../Componets/NewsLetter/NewsLetter'
import Footer from '../Componets/Footer/Footer'



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop