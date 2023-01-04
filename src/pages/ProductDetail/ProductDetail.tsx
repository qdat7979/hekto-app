import React, { useEffect, useState } from 'react'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'
import Footer from '../../components/home/Footer/Footer'
import AppHeader from '../../components/common/Header/Header'
import ProductDetailsComponent from '../../components/common/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import { productApi } from '../../api'
import TabsComponent from '../../components/common/Tabs/Tabs'
import Related from '../../components/common/RelatedProducts/Related'
import Brand from '../../components/home/Brand/BrandsImage'

type Props = {}

const ProductDetail = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const [productDetail, setProductDetail] = useState<any>([]);
  const productId = useParams();

  console.log('productID : ',productId);
  console.log('product get: ',productDetail);

  const getProductDetail = async() => {
    try {
      setLoading(true);
      const res = await productApi.getProductDetail(productId.id);
      setLoading(false);
      return setProductDetail(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getProductDetail();
  },[])

  return (
    <>  
        <AppHeader/>
        <Hero pageName='Product Details' currentPage='Product Details'/>
        <ProductDetailsComponent
          loading = {loading}
          productName = {productDetail.name}
          productImg = {productDetail.img}
          productPrice = {productDetail.price}
        />
        <TabsComponent/>
        <Related/>
        <Brand marginBottom={100}/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default ProductDetail