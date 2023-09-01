import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Popconfirm,
  Radio,
  Spin,
} from "antd";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  cleanProfileDetails,
  getProfileDetails,
  loginSetter,
  logoutSetter,
  updateProfileDetails,
} from "../../Redux/Action/Action";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import dayjs from "dayjs";

const { Search } = Input;

export interface Profile {
  username: string;
  dob: any;

  address: string;
}

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: any) => state.ecommerce.login);
  const cartItem = useSelector((state: any) => state.ecommerce.cartItems);
  const profileDetail = useSelector(
    (state: any) => state.ecommerce.profileDetails
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const nameValidate = [
    { required: true, message: "Please input your username!" },
    { min: 2, message: "Must be at least 3 characters" },
  ];

  const combine = [{ required: true, message: "Please  fill required field" }];

  const minDate: any = moment().subtract(18, "years");

  const disabledDate: any = (current: any) => {
    return current && current > minDate;
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    sessionStorage.clear();
    toast.success("Logout Successfully");
    navigate("/home");
    dispatch(logoutSetter());
  };
  const logoHandler = () => {
    navigate("/");
  };

  const handleSearch = (e: any) => {
    navigate("/search", {
      state: {
        searchKey: e.target.value,
      },
    });
  };

  const showModal = () => {
    dispatch(cleanProfileDetails());

    dispatch(getProfileDetails());
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // dispatch(cleanProfileDetails());
    setIsModalOpen(false);
  };

  const avatarHandler = () => {
    showModal();
  };

  const onFinish = (values: Profile) => {
    let temp = {
      username: values.username,
      dob: values.dob,
      address: values.address,
    };
    handleOk();
    dispatch(updateProfileDetails(temp));
  };

  useEffect(() => {
    dispatch(cleanProfileDetails());
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSetter());
    }
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="nav-main-container">
        <div className="nav-logo" onClick={logoHandler}>
          <div className="company-logo">Creole Ventures</div>

          <p>
            Explore{" "}
            <span>
              Plus
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt=""
                height="13"
              />
            </span>
          </p>
        </div>
        <div className="nav-search-bar">
          {window.location.pathname.split("/")[1] !== "adminpanel" &&
          window.location.pathname.split("/")[1] !== "register" &&
          window.location.pathname.split("/")[1] !== "login" ? (
            <Search placeholder="Search products ..." onChange={handleSearch} />
          ) : null}
        </div>
        <div className="nav-nav-items">
          <div className="nav-nav-items-child">
            <HomeOutlined className="nav-nav-item-logo" />
            <NavLink to="/home" className="item-link">
              Home
            </NavLink>
          </div>
          {window.location.pathname.split("/")[1] !== "adminpanel" ? (
            <div className="nav-nav-items-child">
              <ShoppingCartOutlined className="nav-nav-item-logo" />
              <NavLink to="/cart" className="item-link">
                Cart
              </NavLink>
            </div>
          ) : null}
        </div>
        <div className="nav-cred">
          {isLogin === false && (
            <NavLink to="/login" className="link">
              <Button>Login</Button>
            </NavLink>
          )}

          {isLogin === false && (
            <NavLink to="/register" className="link">
              <Button>Register</Button>
            </NavLink>
          )}
          {isLogin === true && (
            <div className="log-ava">
              {window.location.pathname.split("/")[1] !== "checkout" && (
                <Avatar
                  className="avatar"
                  onClick={avatarHandler}
                  icon={<UserOutlined />}
                ></Avatar>
              )}

              <Modal
                title="My profile"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
              >
                {profileDetail.id ? (
                  <Form
                    name="profile-form"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="form"
                  >
                    <Form.Item
                      label="Username"
                      name="username"
                      initialValue={profileDetail.username}
                      rules={nameValidate}
                      required={false}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Email"
                      name="email"
                      initialValue={profileDetail.email}
                      rules={nameValidate}
                      required={false}
                    >
                      <Input disabled={true} />
                    </Form.Item>

                    <Form.Item
                      label="Gender"
                      name="gender"
                      initialValue={profileDetail.gender}
                      rules={[
                        {
                          required: true,
                          message: "Please select your gender",
                        },
                      ]}
                      required={false}
                    >
                      <Radio.Group disabled={true}>
                        <Radio value={0}> Male </Radio>
                        <Radio value={1}> Female </Radio>
                      </Radio.Group>
                    </Form.Item>
                    <Form.Item
                      label="Birthday"
                      name="dob"
                      rules={combine}
                      required={false}
                      initialValue={dayjs(
                        profileDetail.dob.slice(0, 10),
                        "YYYY-MM-DD"
                      )}
                    >
                      <DatePicker
                        format="YYYY-MM-DD"
                        disabledDate={disabledDate}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Address"
                      name="address"
                      rules={combine}
                      initialValue={profileDetail.address}
                      required={false}
                    >
                      <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        save
                      </Button>
                    </Form.Item>
                  </Form>
                ) : (
                  <Spin></Spin>
                )}
              </Modal>
              <Popconfirm
                title="Are you sure you want to Logout"
                description="Do you want to logout from this page?"
                onConfirm={logoutHandler}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Logout</Button>
              </Popconfirm>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
