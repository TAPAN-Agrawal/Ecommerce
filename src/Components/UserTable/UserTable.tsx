import React from "react";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './UserTable.scss'

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
        title:'Sr',
        dataIndex:'serialno',
        key: 'serialno',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Eamil',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'avatar',
  },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
function UserTable() {
  return <div className="UserTable-wrapper">
<Table columns={columns} dataSource={data} />
  </div>;
}

export default UserTable;
