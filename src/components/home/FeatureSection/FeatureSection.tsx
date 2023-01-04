import React,{FC, useState, useEffect } from 'react'
import { productApi } from '../../../api';
import './FeatureSection.css'

import { Col, Row, Spin } from 'antd';
import ProductCard from '../../common/ProductCard/ProductCard';
import { useSelector } from 'react-redux';

interface Props {

}

const FeatureSection:FC<Props> = () => {
  const [featureProducts, setFeatureProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // data
  const getFeature =  async () => {
    try {
      setLoading(true);
      const res = await productApi.getProduct();
      setLoading(false);
      return setFeatureProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  const token = useSelector((state:any) => state.auth.token);
  
  useEffect(()=>{
    getFeature();
    window.scrollTo({top: 1000, left: 0, behavior: 'smooth'});
  },[]);

  

  return (
    <div className='container'>
        <div className='featureSection'>
          <div className='featureTitle'>
            <span>Featured Products</span>
          </div>
          {
            loading ? 
            <div className='spinLoadingFeature'>
              <Spin size='large'/>
            </div> : 
            <Row gutter={[24,24]}>
              {
                featureProducts.map((prod,i) => {
                  if(prod.type === "feature"){
                    return (
                      <Col key={i} md={8} lg={6}>
                        <ProductCard
                          token={token}
                          data={prod}
                          card='featured'
                          nameFeature = {prod.name}
                          codeFeature= {prod.code}
                          imgFeature = {prod.img}
                          priceFeature = {prod.price}
                        />
                      </Col>
                    )
                  }
                })
              }
            </Row>
          }
        </div>
      </div>
  )
}

export default FeatureSection