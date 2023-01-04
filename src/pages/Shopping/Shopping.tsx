import React from 'react'
import AppHeader from '../../components/common/Header/Header'
import ShoppingCart from '../../components/common/ShoppingCart/ShoppingCart'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'

type Props = {}

const Shopping = (props: Props) => {
  return (
    <>
        <AppHeader/>
        <Hero currentPage='Shopping Cart' pageName='Shopping Cart'/>
        <ShoppingCart/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default Shopping