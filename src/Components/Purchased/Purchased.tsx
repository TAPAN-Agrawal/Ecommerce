import React, { useEffect } from "react";
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Purchased() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //   let token = localStorage.getItem('token')
  //   if(!token){
  //     navigate('/login')
  //     toast.error('please login ')
     
  //   }
    
  // },[])
  return <div>
     <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
  </div>;
}

export default Purchased;
