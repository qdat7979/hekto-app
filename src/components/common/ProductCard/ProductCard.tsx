import React,{FC, useEffect} from 'react'
import { 
    ShoppingCartOutlined, 
    ZoomInOutlined,
    HeartOutlined,
    EditOutlined,
    CalendarOutlined,
    StarFilled
} from '@ant-design/icons'


import product1 from '../../../assets/product1.png'
import saleImg from '../../../assets/sale.png'
import car from '../../../assets/carfree.png'
import blog from '../../../assets/latestblog.png'
import ButtonComponent from '../Button/Button'
import './FeatureCard/FeatureCard.css'
import './LatestCard/LatestCard.css'
import './ShopexCard/ShopexCard.css'
import './TrendingCard/TrendingCard.css'
import './BlogCard/BlogCard.css'
import './ShoplistCard/Shoplist.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addtoUnPaidCart } from '../../../features/slices/auth'
import { toast } from 'react-toastify'

type cardType = 'featured'|'latest'|'trending'|'shopex'|'blog'|'shoplist'|'detail'

interface Props {
    // Feature Products
    card: cardType,
    nameFeature?: string,
    codeFeature?: string,
    imgFeature?: string,
    priceFeature?: string,
    token?: any
    data?: any

    // Latest Products
    sale?:boolean,
    nameLatest?: string,
    imgLatest?: string,
    priceLatest?: string,
    tokenLatest?: any
    dataLatest?: any

    // Shoplist
    nameShoplist?: string,
    imageShoplist?: string,
    tokenShoplist?: any,
    dataShoplist?: any,
    priceShoplist?: any
}

const ProductCard:FC<Props> = (
    {   
        // Feature
        card, 
        sale, 
        nameFeature, 
        codeFeature, 
        imgFeature, 
        priceFeature,
        data,
        token,

        // latest
        nameLatest, 
        imgLatest,
        priceLatest,
        dataLatest,
        tokenLatest,

        // Shoplist
        nameShoplist,
        imageShoplist,
        dataShoplist,
        tokenShoplist,
        priceShoplist
    }) => 

{   
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    // View Detail of Feature
    const viewDetail = () => {
        console.log('navigate ....')
        // navigate(`/products/${data.id}`)
    }


    // Add to Cart Feature
    const handleAddToCart = async () => {
        try {
            console.log('hello add to cart')
            if(token) {
                dispatch(addtoUnPaidCart(data))
                toast.success('Added to your Cart !')
            } else {
                toast.error('You need to log in first !')
            }
        } catch (err: any) {
            console.log(err)
        }
    }
    const clickAddtoCart = () => {
        handleAddToCart();
    }


    // Add to Cart Latest
    const handleAddLatest = () => {
        console.log('hello latest');
        if(tokenLatest) {
            dispatch(addtoUnPaidCart(dataLatest))
            toast.success('Added to your Cart !')
        } else {
            toast.error('You need to log in first !')
        }
    }

    const discount = (price: any) => {
        const realPrice = price * 2
        return realPrice
    }

    // Add to Cart Shoplist
    const handleOnClickShoplist = () => {
        console.log('hello shoplist');
        if(tokenShoplist) {
            dispatch(addtoUnPaidCart(dataShoplist))
            toast.success('Added to your Cart !')
        } else {
            toast.error('You need to log in first !')
        }
    }

  return (  
    <div className='cardWrapper'>
        {/* Featured Card */}
        {   
            card === 'featured'?
            <div className='cardProductItem'>
                <div className='cardProductImage'>
                    <div className='cardProductActions'>
                        <div className='cardProductIcon'>
                            <button className='buttonAdd' onClick={()=>{clickAddtoCart()}}>
                                <ShoppingCartOutlined 
                                    style={{
                                        fontSize: '15px',   
                                        color:'#2F1AC4'
                                    }}
                                />
                            </button>
                        </div>
                        <a href='wishlist'>
                            <HeartOutlined style={{
                                fontSize: '15px',
                                color: '#1389FF'
                            }} />
                        </a>
                        <a href='zoom'>
                            <ZoomInOutlined style={{
                                fontSize: '15px',
                                color: '#1389FF'
                            }} />
                        </a>
                    </div>
                    <img src={imgFeature}/>
                    <div className='cardProductButton'>
                        
                        <NavLink to={`/products/${data.id}`}>
                            <ButtonComponent 
                                text='View Details' 
                                padding='8px 0' 
                                width='94px' 
                                marginBottom={0} 
                                fontSize={'12px'}
                                fontFamily={`'Josefin Sans', sans-serif`}
                                height= {`29px`}
                                backgroundColor = {`#08D15F`}
                                zIndex={9999}
                                onClickFunc={viewDetail}
                            />
                        </NavLink>
                    </div>
                </div>
                <div className='cardProductDesc'>
                    <div className='cardProductTitle featured'>
                        <span>{nameFeature}</span>
                    </div>

                    <div className='cardProductColor'>
                        <div style={{backgroundColor:'#05E6B7'}}></div>
                        <div style={{backgroundColor:'#F701A8'}}></div>
                        <div style={{backgroundColor:'#00009D'}}></div>
                    </div>

                    <div className='cardProductCode'>
                        <span>Code - {codeFeature}</span>
                    </div>

                    <div className='cardProductPrice'>
                        <span>${priceFeature}</span>
                    </div>
                </div>
            </div> : null
        }

        {/* Latest Card */}
        {
            card === 'latest'?
            <div className='cardProductItem latest'>
                <div className='cardProductImage latest'>
                    <div className='cardProductActions'>
                        {/* sale */}
                        { sale?
                            <div className='sale'>
                                <img src={saleImg}/>
                            </div>
                            : null }
                        <div className='cardProductIcon latest'>
                            <button className='buttonAdd' onClick={()=>{handleAddLatest()}} >
                                <ShoppingCartOutlined 
                                    style={{
                                        fontSize: '15px',   
                                        color:'#2F1AC4'
                                    }}
                                />
                            </button>
                        </div>
                        <a href='wishlist' className='heart latest'>
                            <HeartOutlined style={{
                                fontSize: '15px',
                                color: '#1389FF'
                            }} />
                        </a>
                        <a href='zoom' className='zoom latest'>
                            <ZoomInOutlined style={{
                                fontSize: '15px',
                                color: '#1389FF'
                            }} />
                        </a>
                    </div>
                    <img src={imgLatest}/>
                </div>

                <div className='cardProductDesc latest'>
                    <div className='cardProductTitle latest'>
                        <span>{nameLatest}</span>
                    </div>
                    <div className='cardProductPrice latest'>
                        <div className='currentPrice'>
                            <span>${priceLatest}</span>
                        </div>
                        <div className='salePrice'>
                            <span>${discount(priceLatest)}</span>
                        </div>
                    </div>
                </div>
            </div> : null
        }

        {/* Shopex Card */}
        {
            card === 'shopex'?
            <div className='cardProductItem shopex'>
                <div className='cardShopexImg'>
                    <img src={car}/>
                </div>
                <div className='cardShopexTitle'>
                    <span>24/7 Support</span>
                </div>
                <div className='cardShopexDesc'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, aliquam!</span>
                </div>
            </div> : null
        }

        {/* Trending Card */}
        {
            card === 'trending' ?
            <div className='cardProductItem trending'>
                <div className='cardProductImage trending'>
                    <img src={product1}/>
                </div>

                <div className='cardProductDesc trending'>
                    <div className='cardProductTitle trending'>
                        <span>Comfort Handy Craft</span>
                    </div>
                    <div className='cardProductPrice trending'>
                        <div className='currentPrice'>
                            <span>$42.00</span>
                        </div>
                        <div className='salePrice'>
                            <span>$65.00</span>
                        </div>
                    </div>
                </div>
            </div> : null
        }

        {/* Blog Card */}
        {
            card === 'blog' ?
            <div className='cardProductItem blog'>
                <div className='cardProductImage'>
                    <img src={blog}/>
                </div>

                <div className='cardProductDesc'>
                    <div className='blogInfo'>
                        <div className='blogAuthor'>
                            <span><EditOutlined style={{color: '#FB2E86'}} /> Saber Ali</span>
                        </div>
                        <div className='blogCalender'>
                            <span><CalendarOutlined style={{color: '#FFA454'}} /> 
                                21 August, 2020
                            </span>
                        </div>
                    </div>

                    <div className='cardProductTitle blog'>
                        <span>Top essential Trends in 2021</span>
                    </div>

                    <div className='cardProductCode blog'>
                        <span>More off this less hello samlande lied much
                        over tightly circa horse taped mightly</span>
                    </div>

                    <div className='cardBlogButton'>
                        <a>Read More</a>
                    </div>
                </div>
            </div> : null
        }

        {/* Shop List Card */}
        {
            card === 'shoplist' ? 
            <div className='cardProductItem shoplist'>
                <div className='cardProductImage shoplist'>
                    <img src={imageShoplist}/>
                </div>

                <div className='cardProductDesc shoplist'>
                    <div className='cardProductTitle'>
                        <span>{nameShoplist}</span>
                        <div className='cardProductColor'>
                            <div style={{backgroundColor:'#05E6B7', width:'11px', height:'11px', borderRadius:'50%'}}></div>
                            <div style={{backgroundColor:'#F701A8', width:'11px', height:'11px', borderRadius:'50%'}}></div>
                            <div style={{backgroundColor:'#00009D', width:'11px', height:'11px', borderRadius:'50%'}}></div>
                        </div>
                    </div>

                    <div className='cardProductPrice shoplist'>
                        <div className='currentPrice shoplist'>
                            <span>${priceShoplist}</span>
                        </div>
                        <div className='salePrice shoplist'>
                            <span>${priceShoplist * 2}</span>
                        </div>
                        <div className='rate'>
                            <StarFilled style={{color: '#FFC416'}}/>
                            <StarFilled style={{color: '#FFC416'}}/>
                            <StarFilled style={{color: '#FFC416'}}/>
                            <StarFilled style={{color: '#FFC416'}}/>
                            <StarFilled style={{color: '#FFC416'}}/>
                        </div>
                    </div>

                    <div className='cardProductCode shoplist'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</span>
                    </div>

                    <div className='cardProductShoplist'>
                        <div className='shoplistIcon'>
                            <div className='buttonShoplistIcon' onClick={handleOnClickShoplist}>
                                <ShoppingCartOutlined 
                                    style={{
                                        fontSize: '15px',   
                                        color:'#535399'
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div className='shoplistIcon'>
                            <a href='wishlist'>
                                <HeartOutlined style={{
                                    fontSize: '15px',
                                    color: '#535399'
                                }} />
                            </a>
                        </div>

                        <div className='shoplistIcon'>
                            <a href='zoom'>
                                <ZoomInOutlined style={{
                                    fontSize: '15px',
                                    color: '#535399'
                                }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div> : null
        }

        {/* Details Card */}
        {
            card === 'detail' ?
            <div> This is detailed Card</div> : null
        }
    </div>
)
}

export default ProductCard