import React from "react";
import "./AdminPanel.scss";
import {
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserTable from "../UserTable/UserTable";

function AdminPanel() {
  return (
    <div className="admin-wrapper-container">
      <div className="admin-left-wrapper">
        <div className="admin-left-top">
          <div className="admin-logo">
            <h1>Admin-Panel</h1>
          </div>
          <div className="admin-items">
            <UserOutlined />
            <h3>User</h3>
          </div>
          <hr />
          <div className="admin-items">
            <ShoppingOutlined />
            <h3>Product</h3>
          </div>
          <hr />

          <div className="admin-items">
            <UserAddOutlined />
            <h3>Add-Admin</h3>
          </div>
        </div>
        <div className="admin-logout">
          <h2>Logout</h2>
        </div>
      </div>
      <div className="admin-right-wrapper">
        <UserTable/>
      </div>
    </div>
  );
}

export default AdminPanel;
