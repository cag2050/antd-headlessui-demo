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

    const [selectKeys, setSelectKeys] = React.useState('form-demo');

    useEffect(() => {
        console.log("location:", location)
        // 解析路由路径以设置selectedKeys
        // 假设你的路由路径和menu的key相匹配
        const pathnames = location.pathname.split('/').filter(x => x);
        const lastPathname = pathnames[pathnames.length - 1];
        console.log("lastPathname:", lastPathname)
        setSelectKeys(lastPathname);
    }, [location]);

    const itemList = [
        {
            key: 'form',
            label: 'form',
            icon: <AppstoreOutlined/>,
            children: [
                {key: 'form-demo', label: 'form-demo'}
            ]
        },
        {
            key: 'button-demo',
            label: 'button-demo',
            icon: <AppstoreOutlined/>,
        },
        {
            key: 'image-demo',
            label: 'image-demo',
            icon: <AppstoreOutlined/>,
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
                            selectedKeys={selectKeys}
                            items={itemList}
                            style={{
                                flex: 1,
                                minWidth: 0,
                            }}
                            // onSelect={({key, keyPath, selectedKeys, domEvent}) => {
                            onSelect={(select) => {
                                // console.log("select:", select)
                                setSelectKeys(select.key)
                                navigate(select.keyPath.reverse().join('/'))
                            }}
                        />
                    </div>
                </Header>
                <Content>
                    <Routers/>
                </Content>
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
