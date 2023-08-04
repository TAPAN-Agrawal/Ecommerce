import React from "react";
// import classes from "./Navbar.module.scss";
import logo from '../../Assets/Icons/eject.png';
import { Badge, Input } from "antd";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import './Navbar.scss';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchProduct } from "../../Redux/Action/Action";

const { Search } = Input;
function Navbar() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSearch = (value: any) => {
    dispatch(searchProduct(value,1,5))
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
          <Link to="/home">Home</Link>
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
