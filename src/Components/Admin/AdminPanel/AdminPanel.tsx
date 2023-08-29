import React, { useEffect } from "react";
import "./AdminPanel.scss";
import UserTable from "../UserTable/UserTable";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import AddAdmin from "../AddAdmin/AddAdmin";
import Notfound from "../../Notfound/Notfound";
import AddProduct from "../AddProduct/AddProduct";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import RoleProtected from "../../RoleProtected/RoleProtected";

function AdminPanel() {



  return (
    <div className="admin-wrapper-container">
      <Sidebar />

      <div className="admin-right-wrapper">
        <Routes>
          <Route path="*" element={<Notfound />} />
          <Route element={<RoleProtected />}>
            <Route path="/" element={<UserTable />} />
            <Route path="/user" element={<UserTable />} />
            <Route path="product" element={<ProductTable />} />

            <Route path="/addproduct" element={<AddProduct />}/>
            <Route path="/updateproduct" element={<UpdateProduct />}/>
            <Route path="/addAdmin" element={<AddAdmin />}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default AdminPanel;
