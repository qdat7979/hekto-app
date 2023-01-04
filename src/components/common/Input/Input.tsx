import React, {FC} from 'react'
import { StyledDivInput } from './Input.styles';
import './Input.css';
import ButtonComponent from "../Button/Button"

interface Props {
    inputPadding: string;
    inputRadius: string;
    placeHolderPaddingLeft: string;
    placeholder?: string;
    type?: string;
    marginBottom?: number;
    marginTop?: number;

    // need button at last ?
    buttonName?: string;
    buttonPadding?: string;

    // need validation ?
    registerInput?: any
}

const InputNormal:FC<Props> = ({
  placeholder, 
  type, 
  marginBottom,
  marginTop, 
  buttonName, 
  buttonPadding, 
  inputPadding, placeHolderPaddingLeft,
  inputRadius,
  registerInput
}) => {

  return (
    <StyledDivInput 
        style={{
           marginTop: marginTop + 'px',
           marginBottom: marginBottom + 'px',
           padding: inputPadding,
           borderRadius: inputRadius
        }}>

        <input 
          className='inputNormal' 
          type={type} placeholder={placeholder}
          style={{
            paddingLeft: placeHolderPaddingLeft
          }}
          
          // validation
          {...registerInput}

        />

        {
          buttonName? 
          <ButtonComponent 
            marginBottom={0} 
            text={buttonName} 
            padding={buttonPadding}
            width={'135px'}
          />
          : null
        }

    </StyledDivInput>
  )
}

export default InputNormal