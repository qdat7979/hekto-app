import React, { useState } from 'react';
import {Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table'
import './ShoppingCart.css'
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { InputNumber } from 'antd';
import { addtoUnPaidCart, removeUnPaidCart } from '../../../features/slices/auth';
import CartTotal from '../CartTotal/CartTotal';

type Props = {}

interface DataType {
    key: string;
    product: string;
    price: number;
    quantity: number;
    total: number;
}


const columns: ColumnsType<DataType> = [
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        sorter: (a, b) => a.product.length - b.product.length,
        sortDirections: ['descend'],
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
]

const ShoppingCart = (props: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    // Logic add comma in numbers
    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // input Number +
    const handleIncre = (prod: any) => {
        delete prod.quantity
        console.log('Incre', prod);
        dispatch(addtoUnPaidCart(prod))
    }

    // input Number -   
    const handleDecre = (prod: any) => {
        dispatch(removeUnPaidCart(prod.id))
    }

    // data of table
    const dataArray = quantityProduct.map((prod: any) => {
        return (
            {
                key: prod.id,
                product: 
                <div className='tableProduct'>
                    <div className='tableProductImage'>
                        <img className='' src={prod.img}/>
                    </div>

                    <div className='tableProductInfo'>
                        <div className='tableProductName'>
                            <span>{prod.name}</span>
                        </div>
                        <div className='tableProductColor'>
                            <span>Color: Brown</span>
                        </div>
                        <div className='tableProductSize'>
                            <span>Size: XL</span>
                        </div>
                    </div>
                </div>,
                price: `$` + prod.price,
                quantity: 
                <div className='buttonQuantityWrapper'>
                    <button className='buttonQuantity' onClick={()=>{handleIncre(prod)}}> + </button>
                        <InputNumber min={1} max={10} defaultValue={prod.quantity} value={prod.quantity} keyboard={false}/>
                    <button className='buttonQuantity' onClick={()=>{handleDecre(prod)}}>-</button>
                </div>,
                total:`$` + numberWithCommas(prod.price * prod.quantity),
            }
        )
    })

    const handleOnClick = () => {
        navigate('/checkout');
    }

  return (
    <div className='container'>
        <div className='shoppingCartWrapper'>
            <Table 
                style={{flex: 2}} 
                columns={columns} 
                dataSource={dataArray} 
                pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
            />
            <div className='cartPart'>
                <CartTotal onClickFunc={handleOnClick}/>
            </div>
        </div>

    </div>
  )
}

export default ShoppingCart