import React,{FC} from 'react'
import { StyledBanner, StyledTitle } from './hero.styles'
import '../hero/hero.css';
import { Breadcrumb } from 'antd';
import BreadCrumbLink from './breadCrumbLink';

interface Props {
  currentPage: string,
  pageName: string,
}

const Hero:FC<Props> = ({currentPage, pageName}) => {
  const breadCrumb = [
    'Home',
    'Pages',
    currentPage,
  ]

  return (
    <StyledBanner>
        <div className='container'>
          <div className='bannerText'>
            <StyledTitle>
              {pageName}
            </StyledTitle>
            <div>

            <Breadcrumb separator={"."}>
              {
                breadCrumb.map((item, i) => 
                  <Breadcrumb.Item key={i} className='breadcrumbLink'>
                    <BreadCrumbLink key={i} item={item} breadCrumbArray= {breadCrumb}/>
                  </Breadcrumb.Item>  
                )
              }
              <Breadcrumb.Item className='breadcrumbLink'>
                <BreadCrumbLink />
              </Breadcrumb.Item>
            </Breadcrumb>
            </div>
          </div>
        </div>
    </StyledBanner>
  )
}

export default Hero