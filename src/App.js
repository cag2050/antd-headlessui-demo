import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routers';
import {useNavigate, useLocation, withRouter} from "react-router-dom";
import {Col, Layout, Menu} from "antd";
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

const {Header, Content, Sider} = Layout;

function App() {
    const navigate = useNavigate()
    const location = useLocation();

    const [currentMenu, setCurrentMenu] = React.useState('form');
    const [currentSubMenu, setCurrentSubMenu] = React.useState('form-demo')
    const [showSider, setShowSider] = React.useState(false)

    useEffect(() => {
        console.log("location:", location)
        // 解析路由路径以设置selectedKeys
        // 假设你的路由路径和menu的key相匹配
        const pathnames = location.pathname.split('/').filter(x => x);
        // const lastPathname = pathnames[pathnames.length - 1];
        console.log("pathnames:", pathnames)
        // if (pathnames.length === 1) {
        //     setCurrentMenu(pathnames[0]);
        //     if (pathnames[0] === 'button' || pathnames[0] === 'image') {
        //         setShowSider(false)
        //     } else {
        //         setShowSider(true)
        //     }
        // }
        if (pathnames.length >= 2) {
            setCurrentMenu(pathnames[0])
            setCurrentSubMenu(pathnames[1])
            if (pathnames[0] === 'button' || pathnames[0] === 'image') {
                setShowSider(false)
            } else {
                setShowSider(true)
            }
        }
    }, [location]);

    const itemList = [
        {
            key: 'form',
            label: 'form',
            icon: <AppstoreOutlined/>,
            // children: [
            //     {key: 'form-demo', label: 'form-demo'}
            // ]
        },
        {
            key: 'button',
            label: 'button',
            icon: <AppstoreOutlined/>,
        },
        {
            key: 'image',
            label: 'image',
            icon: <AppstoreOutlined/>,
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
    ]

    return (
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
    );
}

export default App;
