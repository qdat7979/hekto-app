import React from 'react'
import AppHeader from '../../components/common/Header/Header'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'

type Props = {}

function Contact({}: Props) {
  return (
    <>  
        <AppHeader/>
        <Hero pageName='Contact' currentPage='Contact'/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default Contact