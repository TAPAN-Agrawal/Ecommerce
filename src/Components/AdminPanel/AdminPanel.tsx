import React, { useEffect, useState } from "react";
import "./AdminPanel.scss";
import {
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserTable from "../UserTable/UserTable";
import { Button } from "antd";
import { Routes,Route, useNavigate, useLocation } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import AddAdmin from "../AddAdmin/AddAdmin";
import Notfound from "../Notfound/Notfound";

function AdminPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];


 
  const userHandler = () => {
    navigate('/adminpanel/user')

  };

  const productHandler = () => {
    navigate('/adminpanel/product')
  };
  const addAdminHandler=()=>{
    navigate('/adminpanel/addAdmin')
  }



  return (
    <div className="admin-wrapper-container">
      <div className="admin-left-wrapper">
        <div className="admin-left-top">
          <div className="admin-logo">
            <h1>Admin-Panel</h1>
          </div>
          <Button className={currentPath === ('user') || currentPath === ''  ? "admin-items-active":"admin-items"} onClick={userHandler}>
            <UserOutlined />
            <h3>User</h3>
          </Button>
          <hr />
          <Button className={currentPath === 'product' ? "admin-items-active":"admin-items"} onClick={productHandler}>
            <ShoppingOutlined />
            <h3>Product</h3>
          </Button>
          <hr />

          <Button className={currentPath === 'addAdmin' ? "admin-items-active":"admin-items"} onClick={addAdminHandler}>
            <UserAddOutlined />
            <h3>Add-Admin</h3>
          </Button>
        </div>
        <Button className="admin-logout">
          <h2>Logout</h2>
        </Button>
      </div>
      <div className="admin-right-wrapper">
      <Routes>
      <Route path="/" element={<UserTable />} />
          <Route  path="/user" element={<UserTable />} />
          <Route path="product" element={<ProductTable />} />
          <Route path="addAdmin" element={<AddAdmin/>}/>
          <Route path="*" element={<h2>Not Found</h2>}/>

        </Routes>
       
      </div>
    </div>
  );
}

export default AdminPanel;
