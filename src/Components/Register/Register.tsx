import React, { useEffect } from "react";
import { Button, DatePicker, Form, Input, Radio } from "antd";
import "./Register.scss";
import img from "../../Assets/Images/register.png";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { afterRegister, register } from "../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export interface RegisterInterface {
  username: string;
  email: string;
  password: string;
  gender: number;
  dob: string;
  address: string;
}

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRegister = useSelector((state: any) => state.ecommerce.isRegistered);

  const nameValidate = [
    { required: true, message: "Please input your username!" },
    { min: 2, message: "Must be at least 3 characters" },
  ];

  const emailValidate: any = [
    { required: true, message: "Please input your email" },
    { type: "email", message: "Please enter your valid email" },
  ];

  const passwordValidate = [
    { required: true, message: "Please input your password!" },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
      message: "Create strong password",
    },
  ];

  const confirmPassword: any = [
    { required: true, message: "Please enter confirmation password" },
    ({ getFieldValue }: any) => ({
      validator(_: any, value: any) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error("Password not match!"));
      },
    }),
  ];

  const combine = [{ required: true, message: "Please  fill required field" }];

  const onFinish = (values: RegisterInterface) => {
   
    
    dispatch(register(values));
   
    
  };

  const minDate:any = moment().subtract(18, 'years');
  const disabledDate:any=(current:any)=>{
    return current && current > minDate;
  }

  useEffect(()=>{
    if(isRegister){
      navigate('/login')
      dispatch(afterRegister())
    }
  },[isRegister])



  return (
    <div className="register-wrapper">
      <h1>Register</h1>
      <div className="register-form-wrapper">
        <img src={img} alt="" />
        <div className="register-form">
          <Form
            name="register-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            className="addAdmin-Form"
          >
            <Form.Item label="Username" name="username" rules={nameValidate}>
              <Input placeholder="Enter username"/>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={emailValidate}>
              <Input placeholder="Enter email"/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={passwordValidate}
            >
              <Input.Password
               onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
              placeholder="Enter password"
              />
            </Form.Item>
            <Form.Item
              label="ConfirmPassword"
              name="confirmPassword"
              rules={confirmPassword}
            >
              <Input.Password
               onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;

              }}
              placeholder="Enter confirm password"
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
              <DatePicker
              format='YYYY-MM-DD'
              disabledDate={disabledDate}
              // defaultPickerValue={minDate}
               />
            </Form.Item>
            <Form.Item label="Address" name="address" rules={combine}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
