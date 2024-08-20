import React, {useEffect, useState} from "react";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {Button, Form, Image, Input, Select, Space} from 'antd';
import SubmitButton from "../components/SubmitButton/SubmitButton";
import DeleteIconDisabled from '../static/images/delete-icon-disabled.png'
import DeleteIcon from '../static/images/delete-icon.png'
import {useNavigate} from "react-router-dom";

const FormDemo3 = () => {
    const navigate = useNavigate()
    const [form1] = Form.useForm()
    const [appIdSelectLoading, setAppIdSelectLoading] = useState(false)
    const [appIdSelectOptions, setAppIdSelectOptions] = useState([
        {
            value: 'app_value_1',
            label: 'app_label_1',
            workflow_id: 'workflow_id_1'
        },
        {
            value: 'app_value_2',
            label: 'app_label_2',
            workflow_id: 'workflow_id_2'
        }
    ])
    const [workflowIdSelectLoading, setWorkflowIdSelectLoading] = useState(false)
    const [workflowIdSelectOptions, setWorkflowIdSelectOptions] = useState([])

    const initData = {
        "app_id": "",
        "workflow_id": "",
        "from_app": "ServerManage",
    };

    const handleSave = () => {
        form1.validateFields().then((values) => {
            console.log('handleSave form1 values', values)
            // onSave(values)
        }).catch(info => {
            console.log('Validate Failed:', info);
        })
    }

    const onAppIdSelectChange = (value, option) => {
        console.log("value:", value)
        console.log("option:", option)
        form1.setFieldsValue({"workflow_id": ''})
        if (option) {
            setWorkflowIdSelectOptions([
                {
                    value: option.workflow_id,
                    label: option.workflow_id,
                }
            ])
        }
        console.log("onAppIdSelectChange form1:", form1.getFieldsValue())
    }
    const onWorkflowIdSelectChange = (value, option) => {
        console.log("onWorkflowIdSelectChange value:", value)
        console.log("onWorkflowIdSelectChange option:", option)
    }

    return (
        <>
            <Form form={form1}
                  labelCol={{
                      span: 6,
                  }}
                  wrapperCol={{
                      span: 18,
                  }}
                  style={{width: '700px'}}
                  initialValues={initData}
                  onValuesChange={(changedValues, allValues) => {
                      console.log('onValuesChange changedValues:', changedValues)
                      console.log('onValuesChange allValues:', allValues)
                      // setData(allValues)
                      if (changedValues.app_id) {
                          console.log(changedValues.app_id)
                      }
                  }}>
                <Form.Item name="app_id" label='选择决策' layout="horizontal" labelCol={{span: 4}}
                           wrapperCol={{span: 24}} rules={[{required: true, message: '请选择决策'}]}>
                    <Select
                        loading={appIdSelectLoading}
                        style={{
                            width: 420,
                        }}
                        placeholder={'请选择决策'}
                        allowClear
                        options={appIdSelectOptions}
                        onChange={onAppIdSelectChange}
                    />
                </Form.Item>
                <Form.Item name="workflow_id" label='选择决策流' layout="horizontal" labelCol={{span: 4}}
                           wrapperCol={{span: 24}} rules={[{required: true, message: '请选择决策流'}]}>
                    <Select
                        loading={workflowIdSelectLoading}
                        style={{
                            width: 420,
                        }}
                        placeholder={'请选择决策流'}
                        allowClear
                        options={workflowIdSelectOptions}
                        onChange={onWorkflowIdSelectChange}
                    />
                </Form.Item>
                <Form.Item style={{display: 'none'}} name="from_app" label="服务名称" layout="horizontal" labelCol={{span: 4}}
                           wrapperCol={{span: 24}} rules={[{required: true, message: '请输入决策服务名称'}]}>
                    <Input/>
                </Form.Item>
            </Form>
            <div style={{textAlign: 'right'}}>
                <Button type="default" style={{marginRight: 10}} onClick={() => {
                    // onCancel()
                }}>取消</Button>
                <Button type="primary" onClick={() => {
                    handleSave()
                }}>保存</Button>
            </div>
        </>
    )
}

export default FormDemo3;