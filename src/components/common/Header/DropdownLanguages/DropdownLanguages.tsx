import React,{FC} from 'react'

import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import iconDown from '../../../../assets/Vector.svg'

import './DropdownLang.css'

interface Props {}

const items: MenuProps['items'] = [
    {
      label: <a href=''>Vietnamese</a>,
      key: '0',
    },
    {
      label: <a href=''>Indian</a>,
      key: '1',
    },
]

const DropdownLanguages:FC<Props> = () => {
  return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e)=> e.preventDefault()}>
                English
                <img style={{marginLeft:'3px'}} src={iconDown}/>
            </a>
        </Dropdown>
  )
}

export default DropdownLanguages