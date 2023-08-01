import React from "react";
// import classes from "./Navbar.module.scss";
import logo from '../../Assets/Icons/eject.png';
import { Badge, Input } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import './Navbar.scss';

const { Search } = Input;
function Navbar() {
  const handleSearch = (value: any) => {
    // Your search logic here
    console.log("Searching for:", value);
  };

  return (
    <div className='nav-main-container'>
      <div className='nav-logo'>
        {/* <img src={logo} alt="company-logo" className='nav-img' /> */}
        <p>Buy Online!</p>
      </div>
      <div className='nav-search-bar'>
        <Search
          placeholder="Enter your search query"
          onSearch={handleSearch}
          enterButton
        />
      </div>
      <div className='nav-nav-items'>
        <div className='nav-nav-items-child'>
          <HomeOutlined className='nav-nav-item-logo' />
          <p>Home</p>
        </div>
        <div className='nav-nav-items-child'>
          <Badge count={5}  size="small" color="gold" className="badge">

          <ShoppingCartOutlined className='nav-nav-item-logo' />
          </Badge>
          <p>Cart</p>
        </div>
      </div>
      <div className='nav-cred'>Login/Register</div>
    </div>
  );
}

export default Navbar;
