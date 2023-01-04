import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './BurgerMenu.css'
import { Collapse } from 'antd';

const { Panel } = Collapse;
type Props = {}

const BurgerMenu = (props: Props) => {

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div className='burgerMenu'>
      <Menu right>

        <div className='collapseBurger'>
          <Collapse defaultActiveKey={['']} onChange={onChange}>
            <Panel header="Languages" key="1">
              <div>English</div>
              <div>Vietnamese</div>
            </Panel>
          </Collapse>
        </div>

        <div className='collapseBurger'>
          <Collapse defaultActiveKey={['']} onChange={onChange}>
            <Panel header="Currency" key="2">
              <div>USD</div>
              <div>VND</div>
            </Panel>
          </Collapse>
        </div>
        <NavLink className={"menu-item navLinkTag"} to={'/login'}>Log In</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/wishlist'}>Wishlist</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/cart'}>Cart</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/'}>Home</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/pages'}>Pages</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/products'}>Products</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/blog'}>Blog</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/shop'}>Shop</NavLink>
        <NavLink className={"menu-item navLinkTag"} to={'/contact'}>Contact</NavLink>
      </Menu>
    </div>
  )
}

export default BurgerMenu