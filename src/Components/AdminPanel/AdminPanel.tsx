import React, { useEffect } from "react";
import "./AdminPanel.scss";
import UserTable from "../UserTable/UserTable";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import AddAdmin from "../AddAdmin/AddAdmin";
import Notfound from "../Notfound/Notfound";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";

function AdminPanel() {
  const navigate = useNavigate();

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (role === "0" || role === "1") {
    } else {
      navigate("/login");
     
    }
  }, []);

  return (
    <div className="admin-wrapper-container">
      <Sidebar />

      <div className="admin-right-wrapper">
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="product" element={<ProductTable />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="addAdmin" element={<AddAdmin />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
