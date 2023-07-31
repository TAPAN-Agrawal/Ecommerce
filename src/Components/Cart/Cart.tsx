import React from "react";
import './Cart.scss'
import CartCard from "../CartCard/CartCard";
import { Card } from "antd";
import CartPrice from "../CartPrice/CartPrice";

function Cart() {
  return <div className="cart-wrapper">
    <div className="cart-wrapper-child">
<div className="left-child">
    <Card title="Cart Items">
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>
        <CartCard/>

    </Card>
   
</div>
<div className="right-child">
    <CartPrice/>
</div>
    </div>
  </div>;
}

export default Cart;
