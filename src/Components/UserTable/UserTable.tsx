import React from "react";
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './UserTable.scss'

interface DataType {
    key: string;
    serialno?:string,
    name: string;
    email:string;
    items:number;
    billamount:number;
 
  }

  const columns: ColumnsType<DataType> = [
  
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // render: (text) => <>{text}</>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Items',
      dataIndex: 'items',
      key: 'items',
    },
  {
    title: 'BillAmount',
    dataIndex: 'billamount',
    key: 'billamount',
  },
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <Button onClick={()=>{console.log("hello",record)}}>Delete</Button>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      
      key: '1',
      name: 'John Brown',
      email:"John@gmail.com",
      items:5,
      billamount:200,
    },
    {
      key: '2',
      name: 'Jim Green',
      email:"John@gmail.com",
      items:5,
      billamount:200,

    
    },
    {
      key: '3',
      name: 'Joe Black',
      email:"John@gmail.com",
      items:5,
      billamount:200,

    
    },
    {
      key: '4',
      name: 'Joe Black',
      email:"John@gmail.com",
      items:5,
      billamount:200,

     
    },
  ];
function UserTable() {
  return <div className="UserTable-wrapper">
    
<Table columns={columns} dataSource={data}  />
  </div>;
}

export default UserTable;
