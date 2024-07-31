import React, {useEffect, useState} from "react";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Image, Input, Space} from 'antd';
import SubmitButton from "../components/SubmitButton/SubmitButton";
import DeleteIconDisabled from '../static/images/delete-icon-disabled.png'
import DeleteIcon from '../static/images/delete-icon.png'
import {useNavigate} from "react-router-dom";

const FormDemo2 = () => {
    const navigate = useNavigate()

    return (
        <>
            <div style={{float:"left", margin: 10}}>FormDemo2: <a onClick={() => navigate("/form/form-demo2/form-demo2-first")}>FormDemo2First</a>, <a onClick={() => navigate("/form/form-demo2/form-demo2-second")}>FormDemo2Second</a></div>
        </>
    )
}

export default FormDemo2;