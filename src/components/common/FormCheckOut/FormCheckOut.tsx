import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUnpaidCart } from '../../../features/slices/auth';
import CartTotal from '../CartTotal/CartTotal';
import './FormCheckOut.css'

type Props = {}

const FormCheckOut = (props: Props) => {

    const products = useSelector((state: any) => state.auth.userInfo.unpaidCart);
    const userInfo = useSelector((state: any) => state.auth.userInfo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Remove duplicate values
    const productCount = [...new Map(products.map((m:any) => [m.id, m]).values())];
    console.log(productCount);
    const newProducts = productCount.map((prod: any)=> prod[1]);

    const handleOnClick = () => {
        console.log('Ordered !!')

        // navigate
        navigate('/ordered');
        // clear unpaidCart
        console.log('userinfo:',userInfo);
        dispatch(clearUnpaidCart([]));
    }

  return (
    <div className='container'>
        <div className='formCheckOutWrapper'>
            <form className='formContact'>
                <div className='formItem'>
                    <div className='formTitle'>
                        <span>Contact Information</span>
                    </div>  
                    <input className='formInput' placeholder='Email or mobile phone number' required/>
                </div>
                <div className='formItem'>
                    <div className='formTitle'>
                        <span>Shipping address</span>
                    </div>
                    <div className='formInputName'>
                        <div className='firstWrapper'>
                            <input className='formInput first' placeholder='First name' required/>
                        </div>
                        <input className='formInput' placeholder='Last name' required/>
                    </div>  
                    <input className='formInput' placeholder='Address'/>
                    <input className='formInput' placeholder='Apartment, suit, e.t.c (optinal)'/>
                    <input className='formInput' placeholder='City'/>
                    <input className='formInput' placeholder='Post Code'/>
                </div>
            </form>

            <div className='productAndBill'>
                <div className='currentProducts'>
                    <ul>
                        {
                            newProducts.map((prod: any) => {
                                return (
                                    <li className='liItem'>
                                        <div className='item'>
                                            <div className='itemInfo'>
                                                <div className='itemImg'>
                                                    <img src={prod.img}/>
                                                </div>
                                                <div className='itemDesc'>
                                                    <div className='itemName'>{prod.name}</div>
                                                    <div className='itemColor'>Color: Brown</div>
                                                    <div className='itemSize'>Size: XL</div>
                                                </div>
                                            </div>

                                            <div className='itemPrice'>
                                            ${prod.price}
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='bill'>
                    <CartTotal onClickFunc={handleOnClick}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormCheckOut