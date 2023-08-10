import React from "react";
import "./Login.scss";
import { Button, Checkbox, Divider, Form, Input } from "antd";

import img from "../../Assets/Images/login.png";
import { Link } from "react-router-dom";
import {
  FacebookFilled,
  GoogleCircleFilled,
  GoogleOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { googlelogin, login } from "../../Redux/Action/Action";

function Login() {

  const dispatch=useDispatch()

  const emailValidate: any = [
    { required: true, message: "email required" },
    { type: "email", message: "Please enter your valid email" },
  ];
  const passwordValidate = [
    { required: true, message: "password required" },
    { min: 8, message: "minimum length is 8 characters" },
  ];
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(login(values))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  const googleHandler = ()=>{
    dispatch(googlelogin())
  }
  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="image-section">
          <img src={img} />
        </div>
        <div className="form-container">
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
            className="login-Form"
            size="large"
          >
            <Form.Item label="Email" name="email" rules={emailValidate}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={passwordValidate}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Divider>or login with</Divider>
            <div className="logos">
             <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}> 
             <GoogleCircleFilled className="logo"
              // onClick={googleHandler}
              /></a>
              <FacebookFilled className="logo" />
              <LinkedinFilled className="logo" />
            </div>
            <br />
            <Link to="/register" className="link">
              Don't have account register
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
