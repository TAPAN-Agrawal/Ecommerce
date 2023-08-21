import React from "react";
import './Purchased.scss'
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

function Purchased() {
  const navigate = useNavigate();
  const purchaseHandler=()=>{
    navigate('/')
  }

  return (
    <div className="purchased-parent">
      <Result
        status="success"
        title="Successfully Purchased "
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console" onClick={purchaseHandler}>
           Home
          </Button>,
          
        ]}
      />
    </div>
  );
}

export default Purchased;
