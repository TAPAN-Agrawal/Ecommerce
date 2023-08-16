import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Button, Checkbox, Divider, Form, Input } from "antd";

import img from "../../Assets/Images/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FacebookFilled,
  GoogleCircleFilled,
  GoogleOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { googlelogin, login } from "../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";

export interface LoginInterface {
  email: string;
  password: string;
}

function Login() {

  const IsLogin = useSelector((state: any) => state.ecommerce.login);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState<any>(false);

  const emailValidate: any = [
    { required: true, message: "email required" },
    { type: "email", message: "Please enter your valid email" },
  ];
  const passwordValidate = [
    { required: true, message: "password required" },
    { min: 8, message: "minimum length is 8 characters" },
  ];
  const onFinish = (values: LoginInterface) => {
    setFlag(true);
    console.log("Success:", values);
    dispatch(login(values)); // Wait for the dispatch to complete
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const googleHandler = () => {
    dispatch(googlelogin());
  };
  const TokenDecoder = (token: any) => {
    try {
      const decodedToken: any = jwtDecode(token);

      if (decodedToken) {
        if (decodedToken.roles === 2) {
          navigate("/home");
          localStorage.setItem("role", "2");
        }
        if (decodedToken.roles === 1) {
          navigate("/adminpanel");
          localStorage.setItem("role", "1");
        }
        if (decodedToken.roles === 0) {
          navigate("/adminpanel");
          localStorage.setItem("role", "0");
        }
      } else {
        console.log("Invalid token");
      }
    } catch (error: any) {
      console.error("Error decoding token:", error.message);
    }
  };
  useEffect(()=>{
    const a:any = new URLSearchParams(location.search).toString()
    localStorage.setItem('url',a)    
  },[])
  useEffect(() => {
    if (IsLogin) {
      navigate("/home");

      let token = localStorage.getItem("token");
      console.log("token", token);
      if (token) {
        TokenDecoder(token);
      } else {
        navigate("/home");
      }
    }
  }, [IsLogin]);

  return (
    <div className="login-wrapper">
      {/* <div className="login-title">Login</div> */}
      <div className="login-box">
        <div className="image-section">
          <img src={img} alt="" />
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
                <GoogleCircleFilled className="logo" />
              </a>
              <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}>
                <FacebookFilled className="logo" />
              </a>

              <a href={`${process.env.REACT_APP_BASEURL}/auth/google`}>
                <LinkedinFilled className="logo" />
              </a>
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
