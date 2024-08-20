import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import FormDemo from "../pages/FormDemo";
import FormDemo2 from "../pages/FormDemo2";
import FormDemo2First from "../pages/FormDemo2First";
import FormDemo2Second from "../pages/FormDemo2Second";
import FormDemo3 from "../pages/FormDemo3";
import ButtonDemo from "../pages/ButtonDemo";
import ImageDemo from "../pages/ImageDemo";
import SearchDemo from "../pages/input/SearchDemo";
import EllipsisOutlinedDemo from "../pages/icon/EllipsisOutlinedDemo";
import IframeDemo from "../pages/iframe/IframeDemo";
import IframeGrafanaDemo from "../pages/iframe/IframeGrafanaDemo";
import GrafanaDemo1 from "../pages/grafana/GrafanaDemo1";
import TableDemo1 from "../pages/table/TableDemo1";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/form/form-demo"/>}/>
            <Route path="form">
                <Route path='form-demo' element={<FormDemo/>}></Route>
                <Route path='form-demo2'>
                    <Route index element={<FormDemo2/>}></Route> {/* 注意index的使用 */}
                    <Route path='form-demo2-first' element={<FormDemo2First/>}></Route>
                    <Route path='form-demo2-second' element={<FormDemo2Second/>}></Route>
                </Route>
                <Route path='form-demo3' element={<FormDemo3/>}></Route>
            </Route>
            <Route path='button'>
                <Route path='button-demo' element={<ButtonDemo/>}></Route>
            </Route>
            <Route path='image'>
                <Route path='image-demo' element={<ImageDemo/>}></Route>
            </Route>
            <Route path='input'>
                <Route path='search-demo' element={<SearchDemo/>}></Route>
            </Route>
            <Route path='icon'>
                <Route path='ellipsis-outlined-demo' element={<EllipsisOutlinedDemo/>}></Route>
            </Route>
            <Route path='iframe'>
                <Route path='iframe-demo' element={<IframeDemo/>}></Route>
                <Route path='iframe-grafana-demo' element={<IframeGrafanaDemo/>}></Route>
            </Route>
            <Route path='grafana'>
                <Route path='grafana-demo1' element={<GrafanaDemo1/>}></Route>
            </Route>
            <Route path='table'>
                <Route path='table-demo1' element={<TableDemo1/>}></Route>
            </Route>
        </Routes>
    )
}

export default Routers