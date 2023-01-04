import { Col, Row } from 'antd'
import React, { FC } from 'react'
import InputNormal from '../../common/Input/Input'
import NameBrand from '../../common/NameBrand/NameBrand'
import './Footer.css'
import { StyledDivFooter, StyledLinkFooter, StyledParagraph, StyledTitleFooter } from './Footer.styles'

type Props = {}


const categories:string[] = [
    'Laptops & Computers',
    'Cameras & Photography',
    'SmartPhone & Tablet',
   'Video Games & Consoles',
   'Waterproof & Headphones'
]

const customersCare: string[] = [
    'My Account',
    'Discount',
    'Returns',
    'Orders History',
    'Order Tracking',
]

const pages: string[] = [
    'Blog',
    'Browse the Shop',
    'Category',
    'Pre-Built Pages',
    'Visual Composer Elements',
    'WooCommerce Pages',
]

const Footer:FC<Props> = () => {
  return (
    <StyledDivFooter>
        <div className='container footerSection'>
            <div className=''>
                <Row gutter={[24, 48]}>
                    <Col lg={9} md={24}>
                        <NameBrand fontSize={38} marginRight={0} fontWeight={700} marginBottom={'30px'}/>
                        <InputNormal 
                            inputPadding='3px'
                            placeHolderPaddingLeft='10px'
                            placeholder='Enter Email Address'
                            buttonName='Sign Up'
                            buttonPadding='11px 39px'
                            inputRadius='3px'
                            marginBottom={25}
                        />
                        <StyledParagraph>
                            Contact Info
                        </StyledParagraph>
                        <StyledParagraph>
                            17 Princess Road, London, Greater London NW1 8JR, UK
                        </StyledParagraph>
                    </Col>

                    <Col lg={5} md={8}>
                        <StyledTitleFooter>
                            Categories
                        </StyledTitleFooter>

                        {
                            categories.map((cate, i) =>
                                <div key={i} className='categoriesItem'>
                                    <StyledLinkFooter
                                        as='a'
                                    >{cate}</StyledLinkFooter>
                                </div>
                            )
                        }
                    </Col>

                    <Col lg={5} md={8}>
                        <StyledTitleFooter>
                            Customer Care
                        </StyledTitleFooter>

                        {
                            customersCare.map((cate, i) =>
                                <div key={i} className='categoriesItem'>
                                    <StyledLinkFooter
                                        as='a'
                                    >{cate}</StyledLinkFooter>
                                </div>
                            )
                        }

                    </Col>

                    <Col lg={5} md={8}>
                        <StyledTitleFooter>
                            Pages
                        </StyledTitleFooter>

                        {
                            pages.map((cate,i) =>
                                <div key={i} className='categoriesItem'>
                                    <StyledLinkFooter
                                        as='a'
                                    >{cate}</StyledLinkFooter>
                                </div>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </div>
    </StyledDivFooter>
  )
}

export default Footer