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
import { formError} from "../../constants/constant";

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
    { required: true, message: `${formError.userRequired}` },
    { min: 2, message: `${formError.minLength}` },
  ];

  const emailValidate: any = [
    { required: true, message: `${formError.email.emailRequired}` },
    { type: "email", message: `${formError.email.validEmail}` },
  ];

  const passwordValidate = [
    { required: true, message: `${formError.password.passwordRequired}` },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,
      message: `${formError.password.strongPassword}`,
    },
  ];

  const confirmPassword: any = [
    { required: true, message: `${formError.password.confirmPasswordMsg}`},
    ({ getFieldValue }: any) => ({
      validator(_: any, value: any) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error(`${formError.password.passwordNotMatching}`));
      },
    }),
  ];

  const combine = [{ required: true, message: `${formError.requiredField}` }];

  const onFinish = (values: RegisterInterface) => {
    dispatch(register(values));
  };

  const minDate: any = moment().subtract(18, "years");
  const disabledDate: any = (current: any) => {
    return current && current > minDate;
  };
  const onPaste = (e: any) => {
    e.preventDefault();
    return false;
  };
  const onCopy = (e: any) => {
    e.preventDefault();
    return false;
  };

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (localStorage.getItem("token")) {
      if (role === "2") {
        navigate("/home");
      } else {
        navigate("/adminpanel");
      }
    }

    if (isRegister) {
      navigate("/login");
      dispatch(afterRegister());
    }
  }, [isRegister]);

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
              <Input placeholder="Enter username" />
            </Form.Item>
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
            <Form.Item
              label="ConfirmPassword"
              name="confirmPassword"
              rules={confirmPassword}
            >
              <Input.Password
                onPaste={onPaste}
                onCopy={onCopy}
                placeholder="Enter confirm password"
              />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={combine}
            >
              <Radio.Group>
                <Radio value={0}> Male </Radio>
                <Radio value={1}> Female </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Birthday" name="dob" rules={combine}>
              <DatePicker
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
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
