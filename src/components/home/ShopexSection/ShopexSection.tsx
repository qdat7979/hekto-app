import { Col, Row } from 'antd'
import React,{FC} from 'react'
import ProductCard from '../../common/ProductCard/ProductCard'
import './ShopexSection.css'

interface Props {}

const ShopexSection:FC<Props> = () => {
  return (
    <div className='container'>
      <div className='shopexSection'>
        <div className='shopexTitle'>
            <span>What Shopex Offer!</span>
        </div>
        <Row gutter={[24,24]}>
            <Col md={12} lg={6}>
                <ProductCard card='shopex'/>
            </Col>
            <Col md={12} lg={6}>
                <ProductCard card='shopex'/>
            </Col>
            <Col md={12} lg={6}>
                <ProductCard card='shopex'/>
            </Col>
            <Col md={12} lg={6}>
                <ProductCard card='shopex'/>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default ShopexSection