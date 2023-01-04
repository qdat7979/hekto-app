import React, { FC } from 'react'
import './ProductDetails.css'
import { StarFilled, HeartOutlined, FacebookFilled, InstagramFilled, TwitterCircleFilled } from '@ant-design/icons'
import { Col, Row, Skeleton, Spin } from 'antd'
import ProductDetail from '../../../pages/ProductDetail/ProductDetail'

interface Props {
    productImg?: string,
    productPrice?: any,
    productName?: string,
    loading?: boolean
}

const ProductDetailsComponent:FC<Props> = ({productImg, productPrice, productName, loading}) => {
  return (
    <div className='container'>
        <div className='productDetailWrapper'>
            <div className='detailImages'>
                <Row gutter={[24,24]}>
                    <Col lg={8}>
                        <div className='smallImgCol'>
                            <Row>
                                        <Col lg={24}>
                                            <div className='smallImg'>
                                                <img src={productImg} style={{width: '100%'}}/>
                                            </div>
                                        </Col>
                            </Row>
                                    
                            <Row>
                                <Col lg={24}>
                                    <div className='smallImg'>
                                        <img src={productImg} style={{width: '100%'}}/>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col lg={24}>
                                    <div className='smallImg'>
                                        <img className='smallImg' src={productImg} style={{width: '100%'}}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                            
                    <Col lg={16}>
                        <div className='bigImgCol'>
                            {
                                loading ?
                                <div className='spin'>
                                    <Spin/> 
                                </div> :
                                <img src={productImg} />
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            
            <div className='productDetailInfo'>
                <Skeleton loading={loading} active>
                    <div className='productDetailTitle'>
                        <span>
                            {productName} 
                        </span>
                    </div>
                    <div className='productDetailRate'>
                        <StarFilled style={{color: '#FFC416'}}/>
                        <StarFilled style={{color: '#FFC416'}}/>
                        <StarFilled style={{color: '#FFC416'}}/>
                        <span className='totalRate'>(22)</span>
                    </div>
                    <div className='productDetailPrice'>
                        <span className='currentPrice'>${productPrice}</span>
                        <span className='saleOffPrice'>${productPrice * 2}</span>
                    </div>
                    <div className='productDetailColor'>    
                        <span>Color</span>
                    </div>
                    <div className='productDetailDesc'>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
                        </span>
                    </div>
                    <div className='productDetailActions'>
                        <span className='productDetailAdd'>
                            Add To Cart
                        </span>
                        <span className='productDetailLove'>
                            <HeartOutlined />
                        </span>
                    </div>
                    <div className='productDetailCategories'>
                        <span>Categories: </span>
                    </div>
                    <div className='productDetailTags'>
                        <span>Tags</span>
                    </div>
                    <div className='productDetailShare'>
                        <span>Share</span>
                        <span className='productDetailSocial'>
                            <span className='fb'> 
                                <FacebookFilled />
                            </span>
                            <span className='ins'>
                                <InstagramFilled style={{color:'#FB2E86'}}/>
                            </span>
                            <span className='twt'>
                                <TwitterCircleFilled />
                            </span>
                        </span>
                    </div>
                </Skeleton>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDetailsComponent