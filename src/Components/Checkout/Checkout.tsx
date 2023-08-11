import { Button, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import "./Checkout.scss";
import CartPrice from "../CartPrice/CartPrice";
import * as yup from "yup";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { completePurchase } from "../../Redux/Action/Action";


export interface CheckoutInterface{
  address_line1: string,
address_line2: string,
city: string,
country:  string,
email:  string,
first_name:  string,
last_name:  string,
zip_postal:  string,
zip_code:  string,

}

function Checkout() {
  const dispatch = useDispatch()
  const {state} = useLocation()
  const required = [{ required: true, message: " required field" }];
 
  const email:any = [{ required: true, message: " required field"},
{type: "email", message: "enter valid email"}]

  const onFinish = (values: CheckoutInterface) => {
dispatch(completePurchase(values))
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
                    name="first_name"
                    label="First Name"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
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
                    name="address_line1"
                    label="Address Line:1"
                    rules={required}
                    className="item"
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                  <Form.Item
                    name="address_line2"
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
                    name="zip_postal"
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
                    name="zip_code"
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
