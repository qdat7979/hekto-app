import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/common/Button/Button'
import AppHeader from '../../components/common/Header/Header'
import Brand from '../../components/home/Brand/BrandsImage'
import Footer from '../../components/home/Footer/Footer'
import BottomBar from '../../components/home/FooterBottomBar/BottomBar'
import Hero from '../../components/home/hero/hero'
import './OrderComplete.css'

type Props = {}

const OrderComplete = (props: Props) => {
    const navigate  = useNavigate();

    const handleOnClick = () => {
        console.log('navigate...');
        navigate('/')
    }
  return (
    <>
        <AppHeader/>
        <Hero pageName='Order' currentPage='Order'/>
        <div className='container'>
            <div className='orderDone'>
                <div className='orderTitle'>Your Order is Completed!</div>
                <div className='orderDesc'>Thank you for your order! Your order is being processed and will be completed within 3-6
                    hours. You will receive an email confirmation when your order is completed.
                </div>
                <ButtonComponent
                    text='Continue Shoping'
                    width='208px'
                    fontSize='16px'
                    marginBottom={0}
                    padding={'14px 36px'}
                    fontFamily={'Lato'}
                    height={'59px'}
                    backgroundColor={'#FF1788'}
                    onClickFunc={handleOnClick}
                />
            </div>
        </div>
        <Brand marginBottom={84}/>
        <Footer/>
        <BottomBar/>
    </>
  )
}

export default OrderComplete