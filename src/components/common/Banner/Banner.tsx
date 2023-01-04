import React,{FC} from 'react'
import bannerBottom from '../../../assets/bannerbottom.png'
import ButtonComponent from '../Button/Button'
import './Banner.css'

interface Props {}

const Banner:FC<Props> = () => {
  return (
    <div className='banner'>
        <div className='container'>
            <div className='bannerSection'>
                <div className='bannerImage'>
                    <img src={bannerBottom}/>
                </div>

                <div className='bannerDesc'>
                    <div className='bannerTitle'>
                        <span>Unique Features Of leatest & Trending Poducts</span>
                    </div>
                    <div className='bannerExplain'>
                        <div className='quoteWrapper'>
                            <div className='quoteLine'>
                                <div className='circle pink'></div>
                                <div className='quote'>All frames constructed with hardwood solids and laminates</div>
                            </div>
                        </div>
                        <div className='quoteWrapper'>
                            <div className='quoteLine'>
                                <div className='circle blue'></div>
                                <div className='quote'>Reinforced with double wood dowels, glue, screw - nails corner 
                                blocks and machine nails</div>
                            </div>
                        </div>
                        <div className='quoteWrapper'>
                            <div className='quoteLine'>
                                <div className='circle green'></div>
                                <div className='quote'>Arms, backs and seats are structurally reinforced</div>
                            </div>
                        </div>
                    </div>

                    <div className='bannerButton'>
                        <ButtonComponent 
                            text='Add to Cart'
                            width='157px'
                            fontSize='17px'
                            fontFamily='Josefin Sans'
                            padding='14px 0'
                            height='45px'
                        />
                        <div className='bannerInfo'>
                            <div className='bannerProductName'>
                                B&B Italian Sofa
                            </div>
                            <div className='bannerProductPrice'>
                                $32.00
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Banner