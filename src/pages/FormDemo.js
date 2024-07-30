import React, {useEffect, useState} from "react";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Image, Input, Space} from 'antd';
import SubmitButton from "../components/SubmitButton/SubmitButton";
import DeleteIconDisabled from '../static/images/delete-icon-disabled.png'
import DeleteIcon from '../static/images/delete-icon.png'

const FormDemo = () => {
    const [form1] = Form.useForm();
    const [deleteIconDisabled, setDeleteIconDisabled] = useState(false)

    const onFinish = (values) => {
        console.log('Received values of form:', values);
    };

    return (
        <Form
            form={form1}
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                address: '',
                users: []
            }}
            autoComplete="off"
            onValuesChange={(changedValues, allValues) => {
                console.log("changedValues:", changedValues)
                console.log("allValues:", allValues)
                if (allValues.users.length === 1) {
                    setDeleteIconDisabled(true)
                } else {
                    setDeleteIconDisabled(false)
                }
            }}
        >
            <Form.Item label="　" name="address" layout="vertical" labelCol={{span: 24}}
                       wrapperCol={{span: 24}} rules={[{required: true, message: '请输入地址'}]}>
                <Input/>
            </Form.Item>
            <Form.List name="users">
                {(fields, {add, remove}) => (
                    <>
                        {fields.map(({key, name, ...restField}) => (
                            <Space
                                key={key}
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                <div>{key}</div>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing first name',
                                        },
                                    ]}
                                >
                                    <Input placeholder="First Name"></Input>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Missing last name',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Last Name"/>
                                </Form.Item>
                                {/*<MinusCircleOutlined onClick={() => remove(name)}/>*/}
                                {deleteIconDisabled ?
                                    <Image
                                        src={DeleteIconDisabled}
                                        preview={false}
                                    >
                                    </Image>
                                    :
                                    <Image
                                        src={DeleteIcon}
                                        preview={false}
                                        onClick={() => remove(name)}
                                    >
                                    </Image>
                                }
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <SubmitButton form={form1}>
                    Submit
                </SubmitButton>
            </Form.Item>
        </Form>
    )
}

export default FormDemo;