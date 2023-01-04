import React, { FC, useEffect, useState } from 'react'
import { 
    StyledDivSearch, 
    StyledDivInput 
} from './InputSearch.styles'
import { ConsoleSqlOutlined, SearchOutlined }  from '@ant-design/icons'
import './InputSearch.css'
import { useNavigate } from 'react-router-dom'
import { productSearch, search } from '../../../features/slices'
import { useDispatch, useSelector } from 'react-redux'
import { Spin } from 'antd'
import { productApi } from '../../../api'

type Props = {}

const InputComponent:FC<Props> = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch  = useDispatch<any>();
  const dataProduct = useSelector((state:any)=> state.cart.productSearch);
  const result = useSelector((state:any) => state.cart.result)

  // console.log('data product: ',dataProduct);
  useEffect(()=>{
    // getData();
    window.scrollTo({top: 300, left: 0, behavior: 'smooth'});    
  },[])


  // Click search
  const handleOnClickSearch = async () => {

    // Empty Search
    if(!input) {
      setLoading(true)
      navigate('/notfound');
      await dispatch(productSearch())
      window.scrollTo({top: 400, left: 0, behavior: 'smooth'});
      setLoading(false);
      setInput('')
    }

    // Type in input
    if(input) {
      setLoading(true);
      await setTimeout(()=>{
        
        const newData = dataProduct.filter((prod:any) => {
          return prod.name.includes(input)
        });
        
        dispatch(search(newData));
        navigate('/shop');
      },400)
     


      setLoading(false);
      window.scrollTo({top: 400, left: 0, behavior: 'smooth'});
      setInput('')
    }
  }

  // Search when type in input
  const handleOnChange = async (e:any) => {
    setInput(e.target.value);
  }

  return (
    <div className='inputSearchWrapper'>
      <StyledDivInput>
          <input
            onFocus={()=>{setShow(true)}}
            className='inputSearch'
            placeholder='Looking for something?...' 
            type={"text"} 
            value={input} 
            onChange={handleOnChange}
            onBlur={()=>{setShow(false)}}
          />
          {
            loading ? 
            <div className='spinSearch'>
              <Spin/>
            </div> : null
          }
          <StyledDivSearch onClick={handleOnClickSearch}>
              <SearchOutlined style={{fontSize: 26}} />
          </StyledDivSearch>
      </StyledDivInput>

      {
        show === true ? 
        <div className='searchResult'>
          <ul>
              <li>This is result</li>
          </ul>
        </div>
        : null
      }
    </div>
  )
}

export default InputComponent