import React, {FC} from 'react'
import { Carousel } from 'antd'
import light from '../../../assets/light.png'
import sofa from '../../../assets/banner.png'
import ButtonComponent from '../../common/Button/Button'
import './Carousel.css'

type Props = {

}

const CarouselComponent:FC<Props> = () => {
  return (
    <>  
        <div className='carouselSection'>

          <Carousel autoplay>
            <div className='carousel'>
              <div className='container'>
                <img src={light}/>
                <div className='carouselItem'>

                  {/* first item */}
                  <div className='carouselItemFirst'>
                    <div className='carouseItemQuote'>
                      Best Furniture For Your Castle...
                    </div>
                    <div className='carouselItemTitle'>
                      New Furniture Collection Trends in 2020
                    </div>
                    <div className='carouselItemContent'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores rem recusandae.
                    </div>
                    <div>
                      <ButtonComponent text='Shop Now' marginBottom={0} padding={'16px 0'} width={'163px'}/>
                    </div>
                  </div>

                  {/* second item */}
                  <div className='carouselItemSecond' >
                    <img src={sofa}/>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
    </>
  )
}

export default CarouselComponent