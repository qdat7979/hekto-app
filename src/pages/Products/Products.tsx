import React from 'react'
import AppHeader from '../../components/common/Header/Header'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'

type Props = {}

function Products({}: Props) {
  return (
    <>
        <AppHeader/>
        <Hero pageName='Products' currentPage='Products'/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default Products