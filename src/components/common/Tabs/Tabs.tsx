import React,{FC} from 'react'
import { Tabs } from 'antd';
import './Tabs.css'
interface Props {}
import { ArrowRightOutlined } from '@ant-design/icons';

const onChange = (key: string) => {
    console.log(key);
  };

const TabsComponent:FC<Props> = () => {
  return (
    <div className='tabsWrapper'>
        <div className='container'>
            <Tabs
                defaultActiveKey="1"
                    onChange={onChange}
                    items={[
                    {
                        label: `Description`,
                        key: '1',
                        children: 
                            <div className={"tabDesc"}>
                                <div className={"tabDescTitle"}>Varios tempor</div>
                                <div className='tabDescPart'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</div>
                            </div>
                        ,
                    },
                    {
                        label: `Additional Info`,
                        key: '2',
                        children: 
                            <div className={"tabDesc"}>
                                <div className={"tabDescTitle"}>Varios tempor</div>
                                <div className='tabDescPart'>Aliquam dis vulputate vulputate intl sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</div>
                            </div>,
                    },
                    {
                        label: `Reviews`,
                        key: '3',
                        children: 
                            <div className={"tabDesc"}>
                                <div className={"tabDescTitle"}>Varios tempor</div>
                                <div className='tabDescPart'>Aliquam dis vuingilla vulputate nunc nec. Dui, massa viverr .</div>
                            </div>,
                    },
                    {
                        label: `Video`,
                        key: '4',
                        children: 
                            <div className={"tabDesc"}>
                                <div className={"tabDescTitle"}>Varios tempor</div>
                                <div className='tabDescPart'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornarea viverr .</div>
                            </div>,
                    },
                ]}
            />
            <div className='tabsMoreDetails'>
                <div className='tabsMoreDetailsTitle'>
                    <span>More details</span>
                </div>
                <div className='tabsMoreDetailsSection'>
                    <div>
                        <ArrowRightOutlined style={{marginRight:"12px", color:"#000000"}} />
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                    </div>

                    <div>
                        <ArrowRightOutlined style={{marginRight:"12px", color:"#000000"}} />
                        Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TabsComponent