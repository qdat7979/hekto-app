import { Row, Col } from 'antd'
import React,{ useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { productApi } from '../../../api'
import ProductCard from '../../common/ProductCard/ProductCard'
import './LatestSection.css'
import { Spin } from 'antd';

type Props = {}

const LatestSection = (props: Props) => {
    const [productLatest, setProductLatest] = useState<any[]>([])
    const [loading, setLoading] = useState<any>(false);

    const dataUser = useSelector((state: any) => state.auth.userInfo);
    const dataUnpaid = useSelector((state: any) => state.auth.userInfo.unpaidCart);
  
    const token = useSelector((state:any) => state.auth.token);

    // data 
    const getLatest = async () => {
        try {
            setLoading(true);
            const res = await productApi.getProduct();
            setLoading(false);
            return setProductLatest(res.data)
        }
        catch(err) {
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getLatest();
    }, [])

    console.log(loading);

  return (
    <div className='container'>
        <div className='latestSection'>
            <div className='latestSectionTitle'>
                <span>Latest Product</span>
            </div>
            {
                loading ? 
                <div className='loadingSpin'>
                    <Spin size='large' /> 
                </div> :
                <Row gutter={[24, 100]}>
                    {
                        productLatest.map((prod, i) => {
                            if(prod.type === "latest"){
                                return(
                                    <Col key={i} md={12} lg={8}>
                                        <ProductCard 
                                            card='latest'
                                            tokenLatest={token}
                                            dataLatest={prod}
                                            nameLatest={prod.name}
                                            imgLatest ={prod.img}
                                            priceLatest={prod.price}
                                            sale= {prod.sale}
                                        />
                                    </Col>
                                )
                            }
                        })
                    }
                </Row>
            }
        </div>
    </div>
  )
}

export default LatestSection