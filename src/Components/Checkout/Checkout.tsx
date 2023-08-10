import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import "./Checkout.scss";
import CartPrice from "../CartPrice/CartPrice";
import * as yup from "yup";
import { useLocation } from "react-router-dom";

function Checkout() {
  const {state} = useLocation()
  const required = [{ required: true, message: " required field" }];
 
  const email:any = [{ required: true, message: " required field"},
{type: "email", message: "enter valid email"}]

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // dispatch(login(values))
  };

  return (
    <div className="checkout-main">
      {/* <h1>checkout</h1> */}
      <div className="checkout-wrapper">
        <Form className="form" layout="vertical" onFinish={onFinish}>
          <div className="checkout-wrapper-child">  
            <div className="detail-section">
              <div className="personal-section">
                <h2>Personal Section</h2>
                <div className="personal-section-child1">
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </div>
                <div className="personal-section-child2">
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={email}
                    className="item"
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </div>
              </div>
              <div className="shipping-section">
                <h2>Shipping Detail</h2>
                <div className="shipping-section-child1">
                  <Form.Item
                    name="address1"
                    label="Address Line:1"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                  <Form.Item
                    name="address2"
                    label="Address Line:2"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                </div>
                <div className="shipping-section-child2">
                  <Form.Item
                    name="city"
                    label="City"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="City" />
                  </Form.Item>
                  <Form.Item
                    name="zip/postal"
                    label="Zip/Postal"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Zip/Postal" />
                  </Form.Item>
                </div>
                <div className="shipping-section-child3">
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Country" />
                  </Form.Item>
                  <Form.Item
                    name="zipcode"
                    label="Zip Code"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Zip Code" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="order-summary">
              <CartPrice  priceList={state.p} />
              <Button type="primary" htmlType="submit">
                COMPLETE PURCHASE
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Checkout;
