import React, { useEffect } from "react";
import { Button, Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './UserTable.scss'
import { deleteUser, getAllUsers } from "../../Redux/Action/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface DataType {
    key: string;
    serialno?:string,
    name: string;
    email:string;
    items:number;
    billamount:number;
 
  }

 
  

function UserTable() {
  const users = useSelector((state:any)=>state.ecommerce.users)
  const dispatch = useDispatch()
  const columns: ColumnsType<DataType> = [
  
    {
      title: 'Name',
      dataIndex: 'username',
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
        <Popconfirm
        title="Delete user"
        description="Are you sure to delete this user?"
        onConfirm={()=>deleteHandler(record.id)}
        okText="Yes"
        cancelText="No"
      >
        <Button
        >
          Delete
        </Button>
      </Popconfirm>
      ),
    },
  ];


  const deleteHandler=(id:any)=>{
    dispatch(deleteUser(id))
  }
useEffect(()=>{
    dispatch(getAllUsers())
},[])

  return <div className="UserTable-wrapper">
    
<Table columns={columns} dataSource={users} />
  </div>;
}

export default UserTable;
