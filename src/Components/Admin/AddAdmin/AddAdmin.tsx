import React, { useState } from "react";
import "./AddAdmin.scss";
import { Button, DatePicker, Form, Input, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import { addAdmin } from "../../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export interface AddAdmin {
  username: string;
  password: string;
  email: string;
  dob: string;
  gender: number;
  address: "string";
}

function AddAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameValidate = [
    { required: true, message: " Username required" },
    { min: 2, message: " At least 3 characters" },
  ];
  const emailValidate: any = [
    { required: true, message: "Email required" },
    { type: "email", message: "Enter  valid email" },
  ];
  const passwordValidate: any = [
    { required: true, message: "Password required" },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
      message: "Create strong password",
    },
  ];
  const combine = [{ required: true, message: "Please  fill required field" }];

  const minDate: any = moment().subtract(18, "years");
  const disabledDate: any = (current: any) => {
    return current && current > minDate;
  };

  const onFinish = (values: AddAdmin) => {
    dispatch(addAdmin(values));
    setTimeout(() => {
      navigate("/adminpanel/admin");
    }, 700);
  };

  const onFinishFailed = (errorInfo: any) => {};
  const onPaste=(e:any)=>{
    e.preventDefault();
    return false;
  }
  const onCopy = (e:any) => {
    e.preventDefault();
    return false;
  }

  return (
    <div className="addAdmin-wrapper">
      <Form
        name="addadmin-form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="addAdmin-Form"
        size="large"
      >
        <h1>AddAdmin</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={nameValidate}
          className="item"
        >
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={emailValidate}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password" rules={passwordValidate}>
          <Input.Password
            onPaste={onPaste}
            onCopy={onCopy}
          />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Radio.Group>
            <Radio value={0}> Male </Radio>
            <Radio value={1}> Female </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Birthday" name="dob" rules={combine}>
          <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item label="Address" name="address" rules={combine}>
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddAdmin;
