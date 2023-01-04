import React, { FC, useLayoutEffect, useState, useEffect } from 'react';
import ButtonComponent from '../../common/Button/Button';
import InputNormal from '../../common/Input/Input';
import './login.css';
import { Space } from 'antd';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { USER } from '../../../constants';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { login } from '../../../features/slices/auth';


type Props = {}

const Login:FC<Props> = () => {

  const token = useSelector((state: any) => state.auth.token)
  console.log(token);

  const dispatch = useDispatch<any>();
  const navigate = useNavigate();


  useEffect(() => {
    if(token){
      navigate('/')
    }  
  }, [token])


  // asynce to get User information
  const getUser = async (id: number) =>{
    try {
      await dispatch(login(id)).unwrap();
      toast.success('Logged in successfully');
    }
    catch(err: any){
      console.log(err)
    }
  }

  const onSubmit = async (data: any) => {
    window.localStorage.setItem('value', JSON.stringify(data));
    if(data.email === USER.email && data.password === USER.password){
      await getUser(USER.id);
    }
    else {
      toast.error('Error');
    }
  }


  // handle validation
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm();

  const email = {...register("email", {
    required: "Email address is required",
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  })}
  
  const password = {...register("password", {
    required: "Password is required",
    minLength: 6,
    maxLength: 10
  })}

  return (
    <Space style={{ display: 'flex', alignItems:'center', justifyContent: 'center' }}>
        <div className='loginForm'>
          {/* login fail or success */}
            <Space direction='vertical' style = {{ display: 'flex'}}>
              {/* Header */}
              <div className='loginHeader'>
                <div className='loginTitle'>Login</div>
                <div className='loginDesc'>Please login using account detail below</div>
              </div>

              {
                <form onSubmit={handleSubmit(onSubmit)}>
                  <InputNormal 
                    inputPadding='13px 0' 
                    inputRadius='3px' 
                    marginBottom={3} 
                    placeHolderPaddingLeft='13px' 
                    placeholder='Email Address' type='text'

                    registerInput = {email} 
                  />
                  <div className='errorMessageWrapper'>
                    {errors.email?.type === 'required' && <p className='errorMessage'>
                      Email is required !
                    </p>}

                    {errors.email?.type === 'pattern' && <p className='errorMessage'>
                      This is not an email !
                    </p>}
                  </div>
                  
                  <InputNormal 
                    inputPadding='13px 0' 
                    inputRadius='3px' 
                    marginBottom={5} 
                    placeHolderPaddingLeft='13px' 
                    placeholder='Password' type='password'

                    registerInput={password}
                  />
                  <div className='errorMessageWrapper'>
                    {errors.password?.type === 'required' && <p className='errorMessage'>Password is required !</p>}
                    {errors.password?.type === 'maxLength' && <p className='errorMessage'>Password must contains maximum 10 characters  !</p>}
                    {errors.password?.type === 'minLength' && <p className='errorMessage'>Your password must be at least 6 characters long</p>}
                  </div>


                  {/* Forgot Password */}
                  <div className='forgotPassword'>
                    <a href='#' className='forgotPasswordLink'>Forgot your password ?</a>
                  </div>

                  {/* Button */}
                  <ButtonComponent 
                    padding='13px 0' 
                    marginBottom={28} 
                    text='Sign In' 
                    width='100%'
                    htmlButtonType='submit'
                  />
                </form>
              }
              
              {/* create Account */}
              {
                <div className='createAccount'>
                  <a className='createAccountLink' href=''>Don't have an Account? Create an Account </a>
                </div>
              }
            </Space>
        </div>
    </Space>
  )
}

export default Login