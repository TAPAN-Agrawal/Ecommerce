import React, { useEffect, useState } from "react";
import "./AdminPanel.scss";
import {
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserTable from "../UserTable/UserTable";
import { Button } from "antd";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import AddAdmin from "../AddAdmin/AddAdmin";
import Notfound from "../Notfound/Notfound";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import Sidebar from "../Sidebar/Sidebar";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

function AdminPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split("/")[2];

  const userHandler = () => {
    navigate("/adminpanel/user");
  };

  const productHandler = () => {
    navigate("/adminpanel/product");
  };
  const addAdminHandler = () => {
    navigate("/adminpanel/addAdmin");
  };

 
  useEffect(() => {
    let role = localStorage.getItem("role");
    if(role === '0' || role === '1'){

     
    }
    else{
      navigate('/login')
      toast.error('you are not authorized to view this panel')
    }
  }, []);

  return (
    <div className="admin-wrapper-container">
      <Sidebar />

      <div className="admin-right-wrapper">
        <Routes>
          <Route  path="/" element={<UserTable />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="product" element={<ProductTable />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="addAdmin" element={<AddAdmin />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
