import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TbShoppingBag } from "react-icons/tb";
import type { MenuProps } from "antd";
import { Button, Menu, Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}



function Sidebar() {
  const logout =()=>{
    localStorage.removeItem("token");

  }
  const items: MenuItem[] = [
    getItem("User", "user", <UserOutlined className="icons" />),
    getItem("Products", "product", <TbShoppingBag className="icons" />),
    getItem("AddAdmin", "addAdmin", <UserAddOutlined className="icons" />),
    getItem(
      "Logout",
      "logout",
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={()=>logout()}
        // onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <LogoutOutlined className="icons" />
      </Popconfirm>
    ),
  ];
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const clickHandler = (e: any) => {
    if (e.key === "user") {
      navigate("/adminpanel/user");
    }
    if (e.key === "product") {
      navigate("/adminpanel/product");
    }
    if (e.key === "addAdmin") {
      navigate("/adminpanel/addAdmin");
    }
    if (e.key === "logout") {
      <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={()=>logout()}
      // onCancel={cancel}
      okText="Yes"
      cancelText="No"
      >

      </Popconfirm>
      // localStorage.removeItem("token");
    }
  
  };
  return (
    <div className={collapsed === false ? "sidebar-wrapper" : ""}>
      <Button onClick={toggleCollapsed}>
        {collapsed ? <MenuOutlined /> : <MenuOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={["user"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className="menu"
        inlineCollapsed={collapsed}
        items={items}
        onClick={clickHandler}
      />
     
      {/* <div className='line'>2</div>
      <div className='line'>3</div>
      <div className='line'>4</div> */}
    </div>
  );
}

export default Sidebar;
