import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routers';
import {useNavigate, useLocation, withRouter} from "react-router-dom";
import {Col, ConfigProvider, Layout, Menu} from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TableOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined
} from '@ant-design/icons';
import zhCN from 'antd/lib/locale/zh_CN';

const {Header, Content, Sider} = Layout;

function App() {
    const navigate = useNavigate()
    const location = useLocation();

    const [currentMenu, setCurrentMenu] = React.useState('form');
    const [currentSubMenu, setCurrentSubMenu] = React.useState('form-demo')
    // const [showSider, setShowSider] = React.useState(false) // 想隐藏左侧Menu，如果想让页面不闪，可以设置初始值为false
    const [showSider, setShowSider] = React.useState(true)

    useEffect(() => {
        // console.log("location:", location)
        // 解析路由路径以设置selectedKeys
        // 假设你的路由路径和menu的key相匹配
        const pathnames = location.pathname.split('/').filter(x => x);
        // const lastPathname = pathnames[pathnames.length - 1];
        // console.log("pathnames:", pathnames)
        // if (pathnames.length === 1) {
        //     setCurrentMenu(pathnames[0]);
        // }
        if (pathnames.length >= 2) {
            setCurrentMenu(pathnames[0])
            setCurrentSubMenu(pathnames[1])
            // 如果需要，可以放开下面的注释，隐藏左侧Menu
            // if (pathnames[0] === 'button' || pathnames[0] === 'image') {
            //     setShowSider(false)
            // } else {
            //     setShowSider(true)
            // }
        }
    }, [location]);

    const itemList = [
        {
            key: 'form',
            label: 'form',
            // icon: <AppstoreOutlined/>,
            // children: [
            //     {key: 'form-demo', label: 'form-demo'}
            // ]
        },
        {
            key: 'button',
            label: 'button',
            // icon: <AppstoreOutlined/>,
        },
        {
            key: 'image',
            label: 'image',
            // icon: <AppstoreOutlined/>,
        },
        {
            key: 'input',
            label: 'input',
            // icon: <AppstoreOutlined/>,
        },
    ]

    const itemList1 = [
        {
            key: 'form',
            label: 'form',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'form-demo', label: 'form-demo'},
                {
                    key: 'form-demo2',
                    label: 'form-demo2',
                    // children: [
                    //     {key: 'form-demo2-first', label: 'form-demo2-first'},
                    // ]
                },
            ]
        },
        {
            key: 'button',
            label: 'button',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'button-demo', label: 'button-demo'}
            ]
        },
        {
            key: 'image',
            label: 'image',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'image-demo', label: 'image-demo'}
            ]
        },
        {
            key: 'input',
            label: 'input',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'search-demo', label: 'search-demo'}
            ]
        }
    ]

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                token: {
                    horizontalLineHeight: '30px',
                    // borderRadiusLG: 4,
                    // borderRadius: 6,
                    // colorPrimary: '#1677ff',
                    // Button: {
                    //     colorPrimary: '#1677ff',
                    // },
                },
                components: {
                    // Card: {
                    //     headerBg: '#eee'
                    // },
                    // Layout: {
                    //     triggerBg: '#fff',
                    //     triggerColor: '#000'
                    // },
                },
            }}>
            <div className="App">
                <Layout>
                    <Header>
                        <div style={{color: "white"}}>
                            <Menu
                                mode="horizontal"
                                defaultSelectedKeys={['form-demo']}
                                selectedKeys={currentMenu}
                                items={itemList}
                                style={{
                                    flex: 1,
                                    // width: 80,
                                    minWidth: 0,
                                }}
                                // onSelect={({key, keyPath, selectedKeys, domEvent}) => {
                                onSelect={(select) => {
                                    console.log("top Menu select:", select)
                                    setCurrentMenu(select.key)
                                    setCurrentSubMenu(`${itemList1.filter(i => i.key === select.key)[0]?.children[0]?.key}`)
                                    navigate(`/${select.key}/${itemList1.filter(i => i.key === select.key)[0]?.children[0]?.key}`)
                                    // navigate(select.keyPath.reverse().join('/'))
                                }}
                            />
                        </div>
                    </Header>
                    <Layout>
                        {
                            showSider && <Sider width={200}
                                                style={{
                                                    background: "#F3F4F6",
                                                }}
                                                collapsible={true}>
                                <Menu mode="inline"
                                      selectedKeys={currentSubMenu}
                                      style={{
                                          height: 'calc(100vh - 64px)',
                                          borderRight: '1px solid #f0f0f0',
                                      }}
                                      items={
                                          itemList1.filter(i => i.key === currentMenu)[0]?.children
                                      }
                                      onSelect={(select) => {
                                          console.log("left Menu select: ", select)
                                          setCurrentSubMenu(select.key)
                                          navigate(`/${currentMenu}/${select.key}`)
                                      }}>
                                </Menu>
                            </Sider>
                        }
                        <Content>
                            <Routers/>
                        </Content>
                    </Layout>
                </Layout>

                {/*<header className="App-header">*/}
                {/*  <img src={logo} className="App-logo" alt="logo" />*/}
                {/*  <p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                {/*  </p>*/}
                {/*  <a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*  >*/}
                {/*    Learn React*/}
                {/*  </a>*/}
                {/*</header>*/}
            </div>
        </ConfigProvider>
    );
}

export default App;
