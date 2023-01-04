import { Row, Col } from 'antd'
import React, {FC} from 'react'
import ProductCard from '../../common/ProductCard/ProductCard'
import './TrendingSection.css'

interface Props {

}

const TrendingSection:FC<Props> = () => {
  return (
    <div className='container'>
        <div className='trendingWrapper'>
            <div className='trendingTitle'>
                <span>Trending Section</span>
            </div>
            <div>
                <Row gutter={[24,24]}>
                    <Col md={8} lg={6}>
                        <ProductCard card='trending'/>
                    </Col>
                    <Col md={8} lg={6}>
                        <ProductCard card='trending'/>
                    </Col>
                    <Col md={8} lg={6}>
                        <ProductCard card='trending'/>
                    </Col>
                    <Col md={8} lg={6}>
                        <ProductCard card='trending'/>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export default TrendingSection