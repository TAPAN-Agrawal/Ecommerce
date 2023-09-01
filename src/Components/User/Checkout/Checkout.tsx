import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import "./Checkout.scss";
import CartPrice from "../CartPrice/CartPrice";

import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  buyNow,
  cleanProfileDetails,
  completePurchase,
  getProfileDetails,
} from "../../../Redux/Action/Action";
import { useSelector } from "react-redux";

export interface CheckoutInterface {
  address: string;

  city: string;
  country: string;
  email: string;
  first_name: string;
  last_name: string;

  pin_code: string;
}

export interface completePurchaseInterface {
  id: number;
  values: CheckoutInterface;
  isCalledFromCart: string | boolean;
}
export interface buyNowInterface {
  id: number;
  quantity: number;
}

function Checkout() {
  const navigate = useNavigate();
  const purchased = useSelector((state: any) => state.ecommerce.purchased);
  const profileDetail = useSelector(
    (state: any) => state.ecommerce.profileDetails
  );
  const dispatch = useDispatch();
  const { state } = useLocation();

  const required = [{ required: true, message: " required field" }];

  const email: any = [
    { required: true, message: " required field" },
    { type: "email", message: "enter valid email" },
  ];

  const onFinish = (values: CheckoutInterface) => {
    let temp: completePurchaseInterface = {
      id: state.id,
      values: values,
      isCalledFromCart: state.isCalledFromCart,
    };
    dispatch(completePurchase(temp));
  };
  const backHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (state) {
      dispatch(cleanProfileDetails());
      if (purchased === true) {
        navigate("/purchased", {
          state: {
            bool: true,
          },
        });
        if (state.isCalledFromCart === false) {
          let temp: buyNowInterface = {
            id: state.id,
            quantity: state.p[0].quantity,
          };

          dispatch(buyNow(temp));
        }
      } else {
        dispatch(getProfileDetails());
      }
    } else {
      navigate("/");
    }
  }, [purchased]);

  return (
    <div className="checkout-main">
      <div className="Back-Front-btn">
        <Button type="text" onClick={backHandler}>
          {" "}
          Back
        </Button>
      </div>
      <div className="checkout-wrapper">
        {profileDetail && (
          <Form className="form" layout="vertical" onFinish={onFinish}>
            <div className="checkout-wrapper-child">
              <div className="detail-section">
                <div className="personal-section">
                  <h2>Personal Section</h2>
                  <div className="personal-section-child1">
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={required}
                      className="item"
                      initialValue={profileDetail.username}
                    >
                      <Input placeholder=" Name" />
                    </Form.Item>
                  </div>
                  <div className="personal-section-child2">
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={email}
                      className="item"
                      initialValue={profileDetail.email}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
                  </div>
                </div>
                <div className="shipping-section">
                  <h2>Shipping Detail</h2>
                  <div className="shipping-section-child1">
                    <Form.Item
                      name="address"
                      label="Address"
                      rules={required}
                      className="item"
                      initialValue={profileDetail.address}
                    >
                      <Input placeholder="Address" />
                    </Form.Item>

                    <Form.Item
                      name="city"
                      label="City"
                      rules={required}
                      className="item"
                    >
                      <Input placeholder="City" />
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
                      name="pin_code"
                      label="Pin Code"
                      rules={required}
                      className="item"
                    >
                      <Input placeholder="Pin Code" />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="order-summary">
                <CartPrice priceList={state.p} />
                <Button type="primary" htmlType="submit">
                  COMPLETE PURCHASE
                </Button>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Checkout;
