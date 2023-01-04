import React from 'react'
import AppHeader from '../../components/common/Header/Header'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'
import notfound from '../../assets/notfound.png'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <>
        <AppHeader/>
        <Hero pageName='Not Found !' currentPage=''/>
        <div className='container'>
            <div className='imgNotFoundWrapper'>
                <img src={notfound}/>
            </div>
        </div>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default NotFound