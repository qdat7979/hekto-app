import { Col, Row } from 'antd'
import React from 'react'
import './Related.css'
import { StarFilled } from '@ant-design/icons'
import chair from '../../../assets/product1.png'

type Props = {}

const Related = (props: Props) => {
  return (
    <div className='container'>
        <div className='relatedTitle'>
            <span>Related Products</span>
        </div>
        <Row gutter={[48,48]}>
            <Col lg={6}>
                <div className='relateProductImg'>
                    <img src={chair}/>
                </div>
                <div className='relateProductDesc'>
                    <div className='relateProductName'>
                        <span>Men's Fashion Wear</span>
                    </div>
                    <div className='relateProductRate'>
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                    </div>
                </div>
                <div className='relateProductPrice'>
                    <span>$32.00</span>
                </div>
            </Col>

            <Col lg={6}>
                <div className='relateProductImg'>
                    <img src={chair}/>
                </div>
                <div className='relateProductDesc'>
                    <div className='relateProductName'>
                        <span>Men's Fashion Wear</span>
                    </div>
                    <div className='relateProductRate'>
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                    </div>
                </div>
                <div className='relateProductPrice'>
                    <span>$32.00</span>
                </div>
            </Col>

            <Col lg={6}>
                <div className='relateProductImg'>
                    <img src={chair}/>
                </div>
                <div className='relateProductDesc'>
                    <div className='relateProductName'>
                        <span>Men's Fashion Wear</span>
                    </div>
                    <div className='relateProductRate'>
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                    </div>
                </div>
                <div className='relateProductPrice'>
                    <span>$32.00</span>
                </div>
            </Col>

            <Col lg={6}>
                <div className='relateProductImg'>
                    <img src={chair}/>
                </div>
                <div className='relateProductDesc'>
                    <div className='relateProductName'>
                        <span>Men's Fashion Wear</span>
                    </div>
                    <div className='relateProductRate'>
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                        <StarFilled style={{color:'#FFC416'}} />
                    </div>
                </div>
                <div className='relateProductPrice'>
                    <span>$32.00</span>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Related