import React, { FC } from 'react'
import brandImage from '../../../assets/brand.png'
import { StyledDivBrandImage } from './BrandImage.styles'

interface Props {
  marginBottom: number;
}

const Brand:FC<Props> = ({marginBottom}) => {
  return (
    <StyledDivBrandImage style={{marginBottom: marginBottom + 'px'}}>
      <img src={brandImage}/>
    </StyledDivBrandImage>
  )
}

export default Brand