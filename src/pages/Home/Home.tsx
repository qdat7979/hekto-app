import React, {FC} from 'react'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Footer from '../../components/home/Footer/Footer'
import CarouselComponent from '../../components/home/carousel/Carousel'
import './Home.css'
import FeatureSection from '../../components/home/FeatureSection/FeatureSection'
import LatestSection from '../../components/home/LatestSection/LatestSection'
import ShopexSection from '../../components/home/ShopexSection/ShopexSection'
import TrendingSection from '../../components/home/TrendingSection/TrendingSection'
import Banner from '../../components/common/Banner/Banner'
import Subcribe from '../../components/common/Subcribe/Subcribe'
import bannerImg from '../../assets/bannerImg.png'
import Brand from '../../components/home/Brand/BrandsImage'
import BlogSection from '../../components/home/BlogSection/BlogSection'
import BurgerMenu from '../../components/common/BurgerMenu/BurgerMenu'
import AppHeader from '../../components/common/Header/Header'

type Props = {

}

const HomePage:FC<Props> = () => {
  return (
    <>
      <BurgerMenu/>
      <AppHeader/>
      <CarouselComponent/>
      <FeatureSection/>
      <LatestSection/>
      <ShopexSection/>
      <Banner/>
      <Subcribe/>
      <TrendingSection/>
      <img className='imageBannerBottom' src={bannerImg} style={{width:'100%' ,height: '462px', marginBottom:'76px'}}/>
      <Brand marginBottom={135}/>
      <BlogSection/>
      <Footer/>
      <BottomBar/>
    </>
  )
}

export default HomePage