import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routers';
import {useNavigate, useLocation, withRouter} from "react-router-dom";
import {Col, ConfigProvider, Image, Layout, Menu} from "antd";
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
import FlowActive from './static/images/flow-active.png'
import Flow from './static/images/flow.png'
import TestActive from './static/images/test-active.png'
import Test from './static/images/test.png'
import ServeActive from './static/images/serve-active.png'
import Serve from './static/images/serve.png'
import MenuHide from './static/images/menu-hide.png'
import MenuShow from './static/images/menu-show.png'

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
        {
            key: 'icon',
            label: 'icon',
        },
        {
            key: 'iframe',
            label: 'iframe',
        },
        {
            key: 'grafana',
            label: 'grafana',
        },
        {
            key: 'table',
            label: 'table',
        },
    ]

    const itemList1 = [
        {
            key: 'form',
            label: 'form',
            icon: <AppstoreOutlined/>,
            children: [
                {
                    key: 'form-demo',
                    label: 'form-demo',
                    icon: <Image src={currentSubMenu === 'form-demo' ? FlowActive : Flow} preview={false}></Image>
                },
                {
                    key: 'form-demo2',
                    label: 'form-demo2',
                    icon: <Image src={currentSubMenu === 'form-demo2' ? TestActive : Test} preview={false}></Image>
                },
                {
                    key: 'form-demo3',
                    label: 'form-demo3',
                    icon: <Image src={currentSubMenu === 'form-demo3' ? ServeActive : Serve} preview={false}></Image>
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
        },
        {
            key: 'icon',
            label: 'icon',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'ellipsis-outlined-demo', label: 'ellipsis-outlined-demo'}
            ]
        },
        {
            key: 'iframe',
            label: 'iframe',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'iframe-demo', label: 'iframe-demo'},
                {key: 'iframe-grafana-demo', label: 'iframe-grafana-demo'},
            ]
        },
        {
            key: 'grafana',
            label: 'grafana',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'grafana-demo1', label: 'grafana-demo1'}
            ]
        },
        {
            key: 'table',
            label: 'table',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'table-demo1', label: 'table-demo1'}
            ]
        },
    ]

    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                token: {
                    // borderRadiusLG: 4,
                    // borderRadius: 6,
                    // colorPrimary: '#1677ff',
                    // Button: {
                    //     colorPrimary: '#1677ff',
                    // },
                },
                components: {
                    Menu: {
                        activeBarHeight: 3,
                        itemColor: '#111111',
                        itemHoverColor: '#111111',
                        horizontalItemSelectedColor: '#111111',
                    },
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
                                    // display: 'flex',
                                    // flex: 1,
                                    // // width: 80,
                                    // minWidth: 0,
                                    // flexBasis: 240,
                                    // flexGrow: 1,
                                    // flex: 1,
                                    // width: 750
                                    // flex: "auto",
                                    // minWidth: 900,
                                    // width: 900,
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
                    <Layout className='main-layout'>
                        <div style={{width: 24}}></div>
                        <div className='left-menu' style={{width: collapsed ? 56 : 208}}>
                            {
                                showSider && <Sider
                                    width={collapsed ? 56 : 208}
                                    style={{
                                        background: "transparent",
                                    }}
                                    trigger={null}
                                    collapsible={true}
                                    collapsed={collapsed}
                                    collapsedWidth={56}>
                                    <Menu
                                        mode="inline"
                                        selectedKeys={currentSubMenu}
                                        style={{
                                            borderRadius: '12px',
                                            //     height: 'calc(100vh - 200px)',
                                            //     borderRight: '1px solid #f0f0f0',
                                            //     marginTop: 30,
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
                                    {!collapsed && (<div onClick={() => setCollapsed(!collapsed)} className="collapse-container" style={{left: collapsed ? 44 : 77}}>
                                        <div><Image src={MenuHide} preview={false}></Image></div>
                                        <span className="collapse-txt">收起侧边栏</span>
                                    </div>)}
                                    {collapsed && (<div onClick={() => setCollapsed(!collapsed)} className="collapse-container" style={{left: collapsed ? 44 : 77}}>
                                        <div><Image src={MenuShow} preview={false}></Image></div>
                                    </div>)}
                                </Sider>
                            }
                        </div>
                        <div style={{width: 24}}></div>
                        <div style={{width: '100%'}}>
                            <Content style={{width: '100%', height: '100%'}}>
                                <Routers/>
                            </Content>
                        </div>
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
