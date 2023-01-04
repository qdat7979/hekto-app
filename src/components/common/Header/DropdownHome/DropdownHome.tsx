import React from 'react'

import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './DropdownHome.css'
import { NavLink } from 'react-router-dom';

type Props = {}

const onClick: MenuProps['onClick'] = ({key}) => {
    if(key === '1-1') {
        console.log('clicked')
    }
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Pages',
        type: 'group',
        children: [
          {
            key: '1-1',
            label: <NavLink to={'/shop'}>Shop List</NavLink>,
          },
          {
            key: '1-2',
            label: <NavLink to={'/blog'}>Blogs</NavLink>
          },
          {
            key: '1-3',
            label: <NavLink to={'/cart'}>Shopping Cart</NavLink>,
          },
          {
            key: '1-4',
            label: <NavLink to={'/pay'}>Payment</NavLink>,
          },
        ],
      },
]

const DropdownHome = (props: Props) => {


  return (
        <Dropdown menu={{ items, onClick }} trigger={['hover']}>
            <a style={{color: '#0D0E43'}} onClick={(e)=> e.preventDefault()}>

                {/* CSS navLinkTag of parent component */}
                <NavLink className={"navLinkTag"} to={'/'}>
                    Home
                    <DownOutlined style={{fontSize: '12px', marginLeft:'4px'}}/>
                </NavLink>
            </a>
        </Dropdown>
  )
}

export default DropdownHome