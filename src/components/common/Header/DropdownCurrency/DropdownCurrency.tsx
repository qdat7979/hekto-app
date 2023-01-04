import React,{FC} from 'react'

import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

import iconDown from '../../../../assets/Vector.svg'

type Props = {}

const items: MenuProps['items'] = [
    {
        label: <a href=''>VND</a>,
        key: '0',
    },
    {
        label: <a href=''>Rupee</a>,
        key: '1',
    },
]

const DropdownCurrency:FC<Props> = () => {
  return (
    <>
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e)=> e.preventDefault()}>
                USD
                <img style={{marginLeft:'3px'}} src={iconDown}/>
            </a>
        </Dropdown>
    </>
  )
}

export default DropdownCurrency