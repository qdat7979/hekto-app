import React from 'react'
import ButtonComponent from '../Button/Button'
import './Subcribe.css'

type Props = {}

const Subcribe = (props: Props) => {
  return (
    <div className='container'>
        <div className='subcribe'>
            <div className='subcribeLine'>
                <span>Get Latest Update By Subscribe
                0ur Newslater</span>
            </div>
            <ButtonComponent width='173px' 
            text='Shop Now' 
            fontSize='17px'
            fontFamily='Josefin Sans'
            padding='13px 0'
            height='39px'/>
        </div>
    </div>
  )
}

export default Subcribe