import React from 'react'
import './BottomBar.css'
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons'
import { Space } from 'antd';

type Props = {}

const BottomBar = (props: Props) => {
  return (
    <div className='footerBottom'>
        <div className='container'>
            <div className='footerBottomContainer'>
                <div>
                    <span className='footerBottomInfo'>©Webecy - All Rights Reserved</span>
                </div>
                <div className='footerBottomIcon'>
                    <Space>
                        <a href=''>
                            <FacebookFilled style={{fontSize: '19px'}}/>
                        </a>
                        <a href=''>
                            <InstagramFilled style={{fontSize: '19px'}} />
                        </a>
                        <a href=''>
                            <TwitterSquareFilled style={{fontSize: '19px'}} />
                        </a>
                    </Space>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomBar