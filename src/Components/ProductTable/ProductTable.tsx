import React from "react";
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import img from '../../Assets/Images/logo-color.png'
import './ProductTable.scss'

interface DataType {
    key: string;
    name: string;
   coverPhoto: string;
   price: number;
   description: string;
 
  }

  const columns: ColumnsType<DataType> = [
 
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'CoverPhoto',
      dataIndex: 'coverPhoto',
      key: 'coverPhoto',
      render: (coverPhoto: string) => (
        <img src={coverPhoto} alt="Cover" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title:'Price',
      dataIndex:'price',
      key:'price'
    },
    {
      title:'Description',
      dataIndex:'description',
      key:'description'
    },
  
 
    
    {
      title: 'Action',
      key: 'action',
      render: ( record) => (
        <div >
        <Button onClick={()=>{console.log("hello",record)}}>Update</Button>
        <Button onClick={()=>{console.log("hello",record)}}>Delete</Button>
        </div>
      ),
    },
  ];
  
  const data: DataType[] = [
    {
      
      key: '1',
      name: 'John Brown',
      coverPhoto: img,
      price: 23,
      description: "string"
      
    },
    {
      key: '2',
      name: 'John Brown',
      coverPhoto: img,

      price: 23,
      description: "string"

    
    },
    {
      key: '3',
      name: 'John Brown',
      coverPhoto: img,

      price: 23,
      description: "string"
    
    },
    {
      key: '4',
      name: 'John Brown',
      coverPhoto: img,

      price: 23,
      description: "string"
     
    },
  ];
function UserTable() {
  return <div className="UserTable-wrapper">
<Table columns={columns} dataSource={data} />
  </div>;
}

export default UserTable;
