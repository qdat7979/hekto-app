import { Row, Col } from 'antd'
import React from 'react'
import ProductCard from '../../common/ProductCard/ProductCard'
import './BlogSection.css'

type Props = {}

const BlogSection = (props: Props) => {
  return (
    <div className='container'>
        <div className='blogTitle'>
            <span>Latest Blog</span>
        </div>
        <div className='blogPost'>
          <Row gutter={[24,48]}>
                  <Col md={12} lg={8}>
                      <ProductCard card='blog'/>
                  </Col>
                  <Col md={12} lg={8}>
                      <ProductCard card='blog'/>
                  </Col>
                  <Col md={12} lg={8}>
                      <ProductCard card='blog'/>
                  </Col>
          </Row>
        </div>
    </div>
  )
}

export default BlogSection