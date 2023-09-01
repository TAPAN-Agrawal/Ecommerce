import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Button, Divider, Form, Input } from "antd";

import img from "../../Assets/Images/login.png";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  cleanProfileDetails,
  googlelogin,
  login,
  getProfileDetails,
  loginSetter,
} from "../../Redux/Action/Action";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

export interface LoginInterface {
  email: string;
  password: string;
}

function Login() {
  const IsLogin = useSelector((state: any) => state.ecommerce.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState<any>(false);

  const emailValidate: any = [
    { required: true, message: "Email required" },
    { type: "email", message: "Please enter your valid email" },
  ];
  const passwordValidate = [
    { required: true, message: "Password required" },
    { min: 8, message: "Minimum length is 8 characters" },
  ];
  const onFinish = (values: LoginInterface) => {
    setFlag(true);
    dispatch(login(values));
  };
  const onFinishFailed = (errorInfo: any) => {};

  const googleHandler = () => {
    window.location.href = `${process.env.REACT_APP_BASEURL}/auth/google`;
    dispatch(googlelogin());
  };
  const TokenDecoder = (token: any) => {
    try {
      const decodedToken: any = jwtDecode(token);

      if (decodedToken) {
        if (decodedToken.roles === 2) {
          navigate("/home");
          localStorage.setItem("role", "2");
          localStorage.setItem("userId", decodedToken.userId);
        }
        if (decodedToken.roles === 1) {
          navigate("/adminpanel");
          localStorage.setItem("role", "1");
          localStorage.setItem("userId", decodedToken.userId);
        }
        if (decodedToken.roles === 0) {
          navigate("/adminpanel");
          localStorage.setItem("role", "0");
          localStorage.setItem("userId", decodedToken.userId);
        }
      } else {
      }
    } catch (error: any) {}
  };
  const onPaste=(e:any)=>{
    e.preventDefault();
    return false;
  }
  const onCopy = (e:any) => {
    e.preventDefault();
    return false;
  }

  useEffect(() => {
    const response = window.location.search;
    const token = response.slice(6);
    if (IsLogin) {
      navigate("/home");
      dispatch(cleanProfileDetails());

      let token = localStorage.getItem("token");
      if (token) {
        TokenDecoder(token);
      } else {
        navigate("/home");
      }
    }
    if (token) {
      localStorage.setItem("token", token);
      navigate("/");
      dispatch(loginSetter());
    }
  }, [IsLogin]);

  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <div className="login-box">
        <div className="image-section">
          <img src={img} alt="" />
        </div>
        <div className="form-container">
          <Form
            name="login-form"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="login-Form"
            size="large"
          >
            <Form.Item label="Email" name="email" rules={emailValidate}>
              <Input placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={passwordValidate}
            >
              <Input.Password
                onPaste={onPaste}
                onCopy={onCopy}
                placeholder="Enter password"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" size="large">
                Login
              </Button>
            </Form.Item>
            <Divider>or login with</Divider>
            <div className="logos">
              <Button type="primary" onClick={googleHandler}>
                google login
              </Button>
              {/* <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}>
                <FacebookFilled className="logo" />
              </a> */}
              {/* 
              <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}>
               
              </a>

              <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}>
                <LinkedinFilled className="logo" />
              </a> */}
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
