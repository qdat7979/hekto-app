import React,{FC} from 'react'
import { StyledDivNameBrand } from './NameBrand.styles'

interface Props {
    fontSize: number;
    marginRight: number;
    fontWeight: number;
    marginBottom: string;
}

const NameBrand:FC<Props> = ({fontSize, marginRight, fontWeight, marginBottom}) => {
  return (
    <StyledDivNameBrand
        style={{
            fontSize: fontSize+'px', 
            marginRight: marginRight+'px',
            fontWeight: fontWeight,
            marginBottom: marginBottom
        }}
    ><a href='/' style={{color:'#0D0E43', textAlign:'center'}}>Hekto</a></StyledDivNameBrand>
  )
}

export default NameBrand