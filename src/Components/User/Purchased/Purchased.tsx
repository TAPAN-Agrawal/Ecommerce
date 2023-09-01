import React, { useEffect } from "react";
import "./Purchased.scss";
import { Button, Result } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function Purchased() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const purchaseHandler = () => {
    navigate("/");
  };
  useEffect(() => {
    if (!state) {
      navigate(-1);
      return;
    }
  });

  return (
    <div className="purchased-parent">
      {state && (
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
      )}
    </div>
  );
}

export default Purchased;
