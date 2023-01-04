import React, { FC } from 'react'
import { Button } from 'antd';

type htmlButtonType = 'submit' | 'button'

interface Props {
  text: string;
  width: string;
  fontSize?: string;
  marginBottom?: number;
  padding?: string;
  fontFamily?: string;
  height?: string;
  backgroundColor?: string;
  zIndex?: number;
  position?: string;
  htmlButtonType?: htmlButtonType;
  onClickFunc?: any
}

const ButtonComponent:FC<Props> = 
  ({
    text,
    backgroundColor = '#FB2E86', 
    marginBottom = 0, 
    padding = '13px', 
    width, 
    fontSize = '16px', 
    fontFamily =`'Josefin Sans', sans-serif`,
    height = '47px',
    zIndex,
    htmlButtonType = 'button',
    onClickFunc
  }) => {

  return (
    <Button
      htmlType= {htmlButtonType}
      type= 'primary'
      onClick={onClickFunc} 
      style={{
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: '3px',
        padding: padding,
        height: height,
        fontFamily: fontFamily,
        fontSize: fontSize,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: marginBottom + 'px', 
        zIndex: zIndex,
      }}
    >{text}</Button>
  )
}

export default ButtonComponent