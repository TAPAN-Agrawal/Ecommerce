import React from "react";
import './CartPrice.scss'
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

function CartPrice() {
  const navigate = useNavigate()
    const purchased = ()=>{
      navigate('/purchased')
    }
  return <div className="CartPrice-wrapper">
    <Card className="CartPrice-Card">
    <h3>Total items:<span>7</span></h3>
    <h3>Total amount:<span>670$</span></h3>
    <Button size="large" onClick={purchased}>Buy</Button>
    </Card>
  </div>;
}

export default CartPrice;
