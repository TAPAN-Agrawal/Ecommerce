import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { TbShoppingBag } from 'react-icons/tb';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', 'user', <UserOutlined className='icons' />),
  getItem('Products', 'product',  <TbShoppingBag className='icons'/>),
    getItem('AddAdmin', 'addAdmin', <UserAddOutlined className='icons' />),
    getItem('Logout','logout',<LogoutOutlined className='icons'/>),
  

]

function Sidebar() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    const clickHandler = (e:any) => {
        if (e.key === 'user') {
    navigate('/adminpanel/user')

        }
        if (e.key === 'product') {
            navigate('/adminpanel/product')

        }
        if (e.key === 'addAdmin') {
    navigate('/adminpanel/addAdmin')
            
        }
    }
  return (
    <div className={collapsed === false ? 'sidebar-wrapper': ''}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['user']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        className='menu'
      
        inlineCollapsed={collapsed}
              items={items}
              onClick={clickHandler}
      />
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      <div className='line4'></div>
      {/* <div className='line'>2</div>
      <div className='line'>3</div>
      <div className='line'>4</div> */}

    </div>
  )
}

export default Sidebar