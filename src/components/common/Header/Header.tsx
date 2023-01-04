import React, {FC, useEffect, useState} from 'react'
import './Header.css'
import { 
  StyledHeader,
  StyledLinkTag,
  StyledDiv,
  StyledTopBar, 
  StyledUl, 
  StyledLiNavList,
  StyledDivHeader,
  StyledDivHeaderInput,
  StyledDivTopBar,
} from './Header.styles'

import { 
  MailOutlined, 
  PhoneOutlined, 
  UserOutlined, 
  HeartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import InputComponent from '../InputSearchIcon/InputSearch'
import NameBrand from '../NameBrand/NameBrand';
import DropdownLanguages from './DropdownLanguages/DropdownLanguages';
import DropdownCurrency from './DropdownCurrency/DropdownCurrency';
import DropdownHome from './DropdownHome/DropdownHome';
import './antdDropdown.css'
import { logout } from '../../../features/slices/auth';
import { productSearch } from '../../../features/slices';

type Props = {}

const AppHeader:FC<Props> = () => {

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(productSearch())
  },[])


  // data
  const token = useSelector((state: any) => state.auth.token);
  const userName = useSelector((state: any) => state.auth.userInfo.name);
  const products = useSelector((state: any) => state.auth.userInfo.unpaidCart);

  // Remove duplicate values
  const numberOfProduct = () => {
    const productCount = [...new Map(products.map((m:any) => [m.id, m]).values())];
    const countProduct = productCount.map(c => c[1]);
    return countProduct.length
  }

  // Dropdown antd
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        'Log Out'
      )
    }
  ]

  // onClick LogOut dropdown
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if( key === '1' ){
      dispatch(logout(''));
      navigate('/login');
    }
  }

  // onClick Shopping Cart 
  const handleClick = () => {
    navigate('/cart');
  }

  return (
    <>
      {/* topBar */}
      <StyledTopBar>

        <div className='container'>
          <StyledDivTopBar>
            {/* Contact */}
            <div className='contact'>
                <StyledUl>
                  <li>
                    <StyledLinkTag href='#'>
                      <MailOutlined/>
                      <a href='mailto:mhhasanul@gmail.com' className='spanTag'>mhhasanul@gmail.com</a>
                    </StyledLinkTag>
                  </li>
                  <li>
                    <StyledLinkTag href='#'>
                      <PhoneOutlined />
                      <a href='tel:(0123)456789' className='spanTag'>(0123)456789</a>
                    </StyledLinkTag>
                  </li>
                </StyledUl>
            </div>

            {/* Other info */}
            <div className='info'>
              <StyledDiv>
                <StyledUl>
                  <li className='liOtherInfo'>
                    <StyledLinkTag href='#'>
                      <DropdownLanguages/>
                    </StyledLinkTag>
                  </li>

                  <li className='liOtherInfo'>
                    <StyledLinkTag href='#'>
                      <DropdownCurrency/>
                    </StyledLinkTag>      
                  </li>

                  <li className='liOtherInfo'>

                    {/* Login and Logout */}
                    { token === ''? 
                      <>
                        <NavLink 
                          className={"spanOtherInfo"} 
                          to={'/login'}
                        >
                          Login
                        </NavLink>
                        <UserOutlined />
                      </>
                      :
                      <div className='LogOut'>
                        <Dropdown menu={{items, onClick}}>
                          <a onClick={(e)=> e.preventDefault()}>
                              <div className='hello'>👋 Hello {userName}</div>
                          </a>
                        </Dropdown>
                      </div>
                    }
                  </li>

                  <li className='liOtherInfo'>
                    <a href='#'>
                      <span className='spanOtherInfo'>
                        Wishlist
                      </span>
                      <HeartOutlined />
                    </a>
                  </li>

                  <li className='liOtherInfo liCart'>
                    {
                      token === '' ? 
                      <>
                        <NavLink to={"/login"}>
                          {/* <span></span> */}
                          <ShoppingCartOutlined style={{fontSize: '20px'}}/>
                        </NavLink> 
                      </>
                      
                      :
                      <>
                        <div className='shoppingCount'>
                          <div className='shoppingIcon' onClick={handleClick}>
                            <ShoppingCartOutlined style={{fontSize: '20px'}}/>
                          </div>
                          <div className='countProduct'>
                            <span>{numberOfProduct()}</span>
                          </div>
                        </div>
                      </>
                    }
                  </li>
                </StyledUl>
              </StyledDiv>
            </div>
          </StyledDivTopBar>
        </div>

      </StyledTopBar>
      

      {/* header */}
      <div className='container'>
        <StyledHeader>  

          {/* Nav and Logo */}
            <StyledDivHeader>

              {/* logo */}
              <NameBrand 
                fontSize={34} 
                marginRight={60}
                fontWeight={600}
                marginBottom={'0px'}
              />

              {/* Nav list */}
              <nav className='navigationBar'>
                <StyledUl>
                  <StyledLiNavList>
                      {/* 1 more classname navLinkTag in here */}
                      <DropdownHome/>
                  </StyledLiNavList>

                  <StyledLiNavList>
                    <NavLink className={"navLinkTag"} to={'/pages'}>Pages</NavLink>
                  </StyledLiNavList>

                  <StyledLiNavList>
                    <NavLink className={"navLinkTag"} to={'/products'}>Products</NavLink>
                  </StyledLiNavList>

                  <StyledLiNavList>
                    <NavLink className={"navLinkTag"} to={'/blog'}>Blog</NavLink>
                  </StyledLiNavList>

                  <StyledLiNavList>
                    <NavLink className={"navLinkTag"} to={'/shop'}>Shop</NavLink>
                  </StyledLiNavList>

                  <StyledLiNavList>
                    <NavLink className={"navLinkTag"} to={'/contact'}>Contact</NavLink>
                  </StyledLiNavList>
                </StyledUl>
              </nav>

              {/* Burger Menu */}
              {/* <BurgerMenu/>   */}
            </StyledDivHeader>

            {/* Input */}
            <StyledDivHeaderInput>
              <InputComponent/>
            </StyledDivHeaderInput>

        </StyledHeader>
      </div>
    </>
  )
}

export default AppHeader