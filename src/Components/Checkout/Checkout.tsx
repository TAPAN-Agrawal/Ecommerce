import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import "./Checkout.scss";
import CartPrice from "../CartPrice/CartPrice";

function Checkout() {
  return (<div className="checkout-main">
        {/* <h1>checkout</h1> */}
    <div className="checkout-wrapper">
      <div className="checkout-wrapper-child">
        <div className="detail-section">
          <div className="personal-section">
            <h2>Personal Section</h2>
            <div className="personal-section-child1">
              <div className="item">
                <label>First Name</label>
                <Input placeholder="First Name" />
              </div>
              <div className="item">
                <label>Last Name</label>

                <Input placeholder="Last Name" />
              </div>
            </div>
            <div className="personal-section-child2">
              <div className="item">
                <label>Email</label>

                <Input placeholder="Email" />
              </div>
            </div>
          </div>
          <div className="shipping-section">
            <h2>Shipping Detail</h2>
            <div className="shipping-section-child1">
              <div className="item">
                <label>Address Line:1</label>
                <Input placeholder="Address" />
              </div>
              <div className="item">
                <label>Address Line:2</label>
                <Input placeholder="Address" />
              </div>
            </div>
            <div className="shipping-section-child2">
              <div className="item">
                <label>City</label>
                <Input placeholder="City" />
              </div>
              <div className="item">
                <label>Zip/Postal</label>
                <Input placeholder="Zip/Postal" />
              </div>
            </div>
            <div className="shipping-section-child3">
              <div className="item">
                <label>Country</label>
                <Input placeholder="Country" />
              </div>
              <div className="item">
                <label>Zip Code</label>
                <Input placeholder="Zip Code" />
              </div>
            </div>
          </div>
        </div>
        <div className="order-summary">
          <CartPrice/>
          <Button type="primary">COMPLETE PURCHASE</Button>
        </div>
      </div>
    </div>
    </div>);
}

export default Checkout;
