import React from "react";
import "./AddAdmin.scss";
import { Button, Checkbox, Form, Input } from "antd";

function AddAdmin() {
  const nameValidate = [
    { required: true, message: "Please input your username!" },
    { min: 2, message: "must be at least 3 characters" },
  ];
 const emailValidate :any= [
    { required: true, message: "Please input your email" },
    { type: "email", message: "Please enter your valid email" },
  ]
  const passwordValidate = [
    { required: true, message: "Please input your password!" },
    { min: 8, message: "minimum length is 8 characters" },
  ];
  const onFinish = (values: any) => {
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
