import React from 'react'
import FormCheckOut from '../../components/common/FormCheckOut/FormCheckOut'
import AppHeader from '../../components/common/Header/Header'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'

type Props = {}

const CheckOut = (props: Props) => {
  return (
    <>
        <AppHeader/>
        <Hero pageName='Check Out' currentPage='Check Out'/>
        <FormCheckOut/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default CheckOut