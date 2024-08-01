import React, {useEffect, useState} from "react";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Image, Input, Space} from 'antd';
import SubmitButton from "../components/SubmitButton/SubmitButton";
import DeleteIconDisabled from '../static/images/delete-icon-disabled.png'
import DeleteIcon from '../static/images/delete-icon.png'
import {useNavigate} from "react-router-dom";

const FormDemo2Second = () => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => {
                navigate(-1);
            }} style={{float: "left", margin: 10}}>返回
            </div>
            <div style={{float: "left", margin: 10}}>FormDemo2Second</div>
        </>
    )
}

export default FormDemo2Second;