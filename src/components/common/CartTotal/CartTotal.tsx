import React, { FC } from 'react'
import ButtonComponent from '../Button/Button';
import { useSelector } from 'react-redux';
import './CartTotal.css'
import { useNavigate } from 'react-router-dom';

interface Props {
    onClickFunc?: any
}

const CartTotal:FC<Props> = ({onClickFunc}) => {
    const navigate = useNavigate();

    // get data
    const dataProduct = useSelector((state: any)=> state.auth.userInfo.unpaidCart);
    console.log('shopping Cart', dataProduct);

    // Logic count Product
    const productCount: any = {}
    dataProduct.forEach((prod: any) => {
            const key = JSON.stringify(prod)
            productCount[key] = (productCount[key] || 0) + 1
        }
    )
    const result = Object.keys(productCount).map(prod => [JSON.parse(prod), productCount[prod]]);
    const quantityProduct = result.map((i)=>{
        return {
            ...i[0],
            quantity: i[1]
        }
    })

    // Logic Subtotal
    const subTotals = quantityProduct.reduce((acc, curr) =>{
        return acc + Number(curr.price * curr.quantity) 
    },0)
    
    // Logic add comma in numbers
    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const onClickHandle = () => {
        onClickFunc();
    }

  return (
    <>
         <div className='cartTotalWrapper'>
                <div className='cartTotalTitle'>
                        <span>Cart Total</span>
                </div>
                <div className='cartTotal'>
                    <div className='totalWrapper'>
                        <div className='subTotal'>
                            <span className='subTotalTitle'>Subtotals: </span>
                            <span className='subTotalPrice'>
                               ${numberWithCommas(subTotals)}
                            </span>
                        </div>
                        <div className='subTotal'>
                            <span className='subTotalTitle'>Totals: </span>
                            <span className='subTotalPrice'>$
                                {numberWithCommas(subTotals * 10/100 + subTotals)}
                            </span>
                        </div>
                    </div>
                    <div className='shipping'>
                        <span>
                            Shipping & taxes calculated at checkout
                        </span>
                    </div>
                    <ButtonComponent
                        onClickFunc={onClickHandle} 
                        text='Proceed to check out'
                        width='100%'
                        fontSize='14px'
                        padding='11px'
                        fontFamily='Lato'
                        backgroundColor='#19D16F'
                        height='40px'
                    />
                </div>
            </div>
    </>
  )
}

export default CartTotal