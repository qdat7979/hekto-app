import React from 'react'
import AppHeader from '../../components/common/Header/Header'
import ProductCard from '../../components/common/ProductCard/ProductCard'
import Brand from '../../components/home/Brand/BrandsImage'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'
import Shoplist from '../../components/home/ShoplistSection/Shoplist'

type Props = {}

function Shop({}: Props) {
  return (
    <>  
        <AppHeader/>
        <Hero currentPage='Shop List' pageName='Shop List'/>
        <Shoplist/>
        <Brand marginBottom={192}/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default Shop