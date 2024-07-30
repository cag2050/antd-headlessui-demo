import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import FormDemo from "../pages/FormDemo";
import ButtonDemo from "../pages/ButtonDemo";
import ImageDemo from "../pages/ImageDemo";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/form/form-demo"/>}/>
            <Route path="form">
                <Route path='form-demo' element={<FormDemo></FormDemo>}></Route>
            </Route>
            <Route path='button-demo' element={<ButtonDemo></ButtonDemo>}></Route>
            <Route path='image-demo' element={<ImageDemo></ImageDemo>}></Route>
        </Routes>
    )
}

export default Routers