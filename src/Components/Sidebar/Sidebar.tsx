import React, { useState } from "react";
import { MenuOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { TbShoppingBag } from "react-icons/tb";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { toast } from "react-toastify";

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
  const items: MenuItem[] = [
    getItem("User", "user", <UserOutlined className="icons" />),
    getItem("Products", "product", <TbShoppingBag className="icons" />),
    getItem("AddAdmin", "addAdmin", <UserAddOutlined className="icons" />),
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  let selectedKey: any = "user";
  const matchingItem = items.find((item: any) =>
    location.pathname.includes(item.key)
  );
  if (matchingItem) {
    selectedKey = matchingItem.key;
  }

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
      let role = localStorage.getItem("role");
      if (role === "1") {
        toast.error("you have view only permission");
      } else {
        navigate("/adminpanel/addAdmin");
      }
    }
  };
  return (
    <div className={collapsed === false ? "sidebar-wrapper" : ""}>
      <Button onClick={toggleCollapsed}>
        {collapsed ? <MenuOutlined /> : <MenuOutlined />}
      </Button>
      {!collapsed && <h4>Admin Panel</h4>}
      <Menu
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={["user"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        className="menu"
        inlineCollapsed={collapsed}
        items={items}
        onClick={clickHandler}
      />
    </div>
  );
}

export default Sidebar;
