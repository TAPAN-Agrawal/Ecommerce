import React from "react";
import "./AddAdmin.scss";
import { Button, Checkbox, DatePicker, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addAdmin } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";

function AddAdmin() {
  const dispatch = useDispatch()
  const nameValidate = [
    { required: true, message: " username required" },
    { min: 2, message: " at least 3 characters" },
  ];
 const emailValidate :any= [
    { required: true, message: " email required" },
    { type: "email", message: " enter  valid email" },
  ]
  const passwordValidate = [
    { required: true, message: "password required" },
    { min: 8, message: "minimum 8 characters" },
  ];
  const combine = [{ required: true, message: "Please  fill required field" }];

  const onFinish = (values: any) => {
    dispatch(addAdmin(values))
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div    className="addAdmin-wrapper">
        {/* <h1>Add-Admin</h1> */}
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="addAdmin-Form"
        size="large"
      >
       <h1>AddAdmin</h1>
       <Form.Item label="Username" name="username" rules={nameValidate} >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={emailValidate}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={passwordValidate}>
          <Input.Password />
        </Form.Item>
        <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select your gender" }]}
            >
              <Radio.Group 
              >
                <Radio value="male"> Male </Radio>
                <Radio value="female"> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Birthday" name="dob" rules={combine}>
              <DatePicker />
            </Form.Item>
            <Form.Item label="Address" name="address" rules={combine}>
              <TextArea rows={4} />
            </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>    
       
      </Form>
    </div>
  );
}

export default AddAdmin;
