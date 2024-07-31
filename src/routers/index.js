import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import FormDemo from "../pages/FormDemo";
import FormDemo2 from "../pages/FormDemo2";
import FormDemo2First from "../pages/FormDemo2First";
import FormDemo2Second from "../pages/FormDemo2Second";
import ButtonDemo from "../pages/ButtonDemo";
import ImageDemo from "../pages/ImageDemo";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/form/form-demo"/>}/>
            <Route path="form">
                <Route path='form-demo' element={<FormDemo></FormDemo>}></Route>
                <Route path='form-demo2'>
                    <Route index element={<FormDemo2></FormDemo2>}></Route> {/* 注意index的使用 */}
                    <Route path='form-demo2-first' element={<FormDemo2First></FormDemo2First>}></Route>
                    <Route path='form-demo2-second' element={<FormDemo2Second></FormDemo2Second>}></Route>
                </Route>
            </Route>
            <Route path='button'>
                <Route path='button-demo' element={<ButtonDemo></ButtonDemo>}></Route>
            </Route>
            <Route path='image'>
                <Route path='image-demo' element={<ImageDemo></ImageDemo>}></Route>
            </Route>
        </Routes>
    )
}

export default Routers