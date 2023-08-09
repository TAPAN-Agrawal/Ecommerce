import React from "react";
import logo from "../../Assets/Images/shopping-bag-cart-ecommerce-icon-bubble-speech-chat-3d-rendering-removebg-preview (1).png";
import { Badge, Button, Input } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../Redux/Action/Action";

const { Search } = Input;
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (value: any) => {
    // dispatch(searchProduct(value, 1, 5));
    navigate('/search',
       {
        state:{
          searchKey:value
        }
       }
    )
    console.log("Searching for:", value);
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-main-container">
        <div className="nav-logo">
          <img src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg' alt="company-logo" className="nav-img" />
          <p>Explore <span>Plus
              <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" height='13'/>
            </span></p>
        </div>
        <div className="nav-search-bar">
          {/* <Search
            placeholder="Enter your search query"
            onSearch={handleSearch}
            enterButton
          /> */}
           <Search placeholder="Enter your search query" onSearch={handleSearch}  />
        </div>
        <div className="nav-nav-items">
          <div className="nav-nav-items-child">
            <HomeOutlined className="nav-nav-item-logo" />
            <NavLink to="/home" className="item-link">
              Home
            </NavLink>
          </div>
          <div className="nav-nav-items-child">
            <Badge count={5} size="small" color="gold" className="badge">
              <ShoppingCartOutlined className="nav-nav-item-logo" />
            </Badge>
            <NavLink to="/cart" className="item-link">
              Cart
            </NavLink>
          </div>
        </div>
        <div className="nav-cred">
          <NavLink to="/login" className="link">
          <Button>Login</Button>
          </NavLink>
          
          <NavLink to="/register" className="link">
          <Button>Register</Button>

            
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
