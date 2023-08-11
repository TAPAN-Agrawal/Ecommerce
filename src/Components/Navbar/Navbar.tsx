import React, { useEffect, useState } from "react";
import logo from "../../Assets/Images/shopping-bag-cart-ecommerce-icon-bubble-speech-chat-3d-rendering-removebg-preview (1).png";
import { Badge, Button, Input, Popconfirm } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginSetter,
  logoutSetter,
  searchProduct,
} from "../../Redux/Action/Action";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

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

  const handleSearch = (value: any) => {
    navigate("/search", {
      state: {
        searchKey: value,
      },
    });
    console.log("Searching for:", value);
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
        <div className="nav-logo">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
            alt="company-logo"
            className="nav-img"
          />
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
            {/* <Badge count={cartItem.length} size="small" color="gold" className="badge"> */}
            <ShoppingCartOutlined className="nav-nav-item-logo" />
            {/* </Badge> */}
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
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button>Logout</Button>
            </Popconfirm>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
