import React from 'react'
import Hero from '../../components/home/hero/hero'
import Login from '../../components/home/Login/Login'
import Brand from '../../components/home/Brand/BrandsImage'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import AppHeader from '../../components/common/Header/Header'


const LoginPage = () => {
  return (
    <div>
        <AppHeader/>
        <Hero pageName='My Account' currentPage='My Account'/>
        <Login/>
        <Brand marginBottom={109}/>
        <Footer/>
        <BottomBar/>
    </div>
  )
}

export default LoginPage