import React, {useEffect, useState} from "react";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Image, Input, Space} from 'antd';
import SubmitButton from "../components/SubmitButton/SubmitButton";
import DeleteIconDisabled from '../static/images/delete-icon-disabled.png'
import DeleteIcon from '../static/images/delete-icon.png'
import {useNavigate} from "react-router-dom";

const FormDemo3 = () => {
    const navigate = useNavigate()

    return (
        <>
            <div style={{float:"left", margin: 10}}>FormDemo3</div>
        </>
    )
}

export default FormDemo3;