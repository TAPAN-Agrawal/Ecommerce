import React, { useEffect, useState} from "react";
import {  Button, Input, Popconfirm } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginSetter,
  logoutSetter,
} from "../../Redux/Action/Action";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import logo from '../../Assets/Images/logo-no-background.png'

const { Search } = Input;
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: any) => state.ecommerce.login);
  const cartItem = useSelector((state: any) => state.ecommerce.cartItems);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    toast.success("Logout Successfully");
    navigate("/home");
    dispatch(logoutSetter());
  };
  const logoHandler=()=>{
    navigate('/')
  }

  const handleSearch = (value: any) => {
    navigate("/search", {
      state: {
        searchKey: value,
      },
    });

  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(loginSetter());
    }
  }, []);

  return (
    <div className="nav-wrapper">
      <div className="nav-main-container">
        <div className="nav-logo" onClick={logoHandler}>
          <div className="company-logo">Velvate Aura</div>
          {/* <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
            alt="company-logo"
            className="nav-img"
          /> */}
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
          <Search
            placeholder="Enter your search query"
            onSearch={handleSearch}
          />
        </div>
        <div className="nav-nav-items">
          <div className="nav-nav-items-child">
            <HomeOutlined className="nav-nav-item-logo" />
            <NavLink to="/home" className="item-link">
              Home
            </NavLink>
          </div>
          <div className="nav-nav-items-child">
            <ShoppingCartOutlined className="nav-nav-item-logo" />
            <NavLink to="/cart" className="item-link">
              Cart
            </NavLink>
          </div>
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
            <Popconfirm
              title="Are you sure you want to Logout"
              description="Do you want to logout from this page?"
              onConfirm={logoutHandler}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Logout</Button>
            </Popconfirm>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
