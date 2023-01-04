import { Row, Col, Spin } from 'antd'
import ProductCard from '../../common/ProductCard/ProductCard'
import './Shoplist.css'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import notfound from '../../../assets/notfound.png'


type Props = {}

const Shoplist = (props: Props) => {

  const data:any = useSelector((state:any) => state.cart.productSearch)
  const result: any = useSelector((state: any) => state.cart.result)

  console.log('result: ',result);

  const tokenShoplist = useSelector((state:any) => state.auth.token);
  
  return (
    <div className='container'>
        <Row>
          { 
             !_.isEmpty(result) ?
            result.map((prod:any ,i:any) => {
              return (
                <Col key={i} md={24}>
                  <ProductCard 
                    card='shoplist'
                    priceShoplist= {prod.price}
                    nameShoplist={prod.name}
                    imageShoplist={prod.img}
                    dataShoplist = {prod}
                    tokenShoplist = {tokenShoplist}
                  />
                </Col>
              )
            }) : 
            <div className='imgNotFoundWrapper'>
              <img src={notfound}/>
            </div>
          }
        </Row>
    </div>
  )
}

export default Shoplist