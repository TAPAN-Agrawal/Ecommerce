import React, { useEffect, useState } from "react";
import "./Detail.scss";
import { Button, Divider, Spin } from "antd";
import { RocketOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addToCart,
  cleanSingleProduct,
  getSingleProduct,
  purchaseRemover,
} from "../../Redux/Action/Action";
import Offer from "../Offer/Offer";
import Other from "../Other/Other";
import { toast } from "react-toastify";

export interface addToCartInterface {
  id: number;
  quantity: number;
}

function Detail() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state: any) => state.ecommerce.singleProduct
  );

  const [detailProduct, setDetailProduct] = useState<any>([]);

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    let temp = count + 1;
    setCount(temp);
  };

  const decrement = () => {
    let temp = count - 1;
    if (temp < 1) {
      temp = 0;
    }
    setCount(temp);
  };

  const handleChange = (value: any) => {};

  const cartHandler = () => {
    let token = localStorage.getItem("token");

    let data: addToCartInterface = {
      id: location.state.id,
      quantity: count,
    };
    if (token) {
      dispatch(addToCart(data));
      dispatch(purchaseRemover());
    } else {
      navigate("/login");
    }
  };
  const BuyHandler = () => {
    if (count === 0) {
  
    } else {
      let role = localStorage.getItem("role");
      if (role !== "2") {
        return;
      }
      dispatch(purchaseRemover());
      let data: addToCartInterface = {
        id: location.state.id,
        quantity: count,
      };
      let price = [
        {
          item: singleProduct.product_name,
          price: singleProduct.price * count,
          quantity: count,
        },
      ];
      navigate("/checkout", {
        state: {
          p: price,
          id: location.state.id,
          isCalledFromCart: false,
        },
      });
    }
  };
  const backHandler = () => {
    navigate(-1);
  };
  useEffect(() => {
    dispatch(cleanSingleProduct());

    dispatch(getSingleProduct(location.state.id));
    setDetailProduct(singleProduct);
  }, []);

  return (
    <div className="parent-detail">
      <div className="Back-Front-btn">
        <Button type="text" onClick={backHandler}>
          {" "}
          Back
        </Button>
      </div>
      {singleProduct.id ? (
        <div className="parentd">
          <div className="detail-parent-wrapper">
            <div className="detail-wrapper">
              <div className="detail-product-image">
                <img
                  src={`${process.env.REACT_APP_BASEURL}/${singleProduct.product_img}`}
                  alt=""
                  height={400}
                  // className="detail-image"
                />
                <div className="small-img">
                  <img
                    src={`${process.env.REACT_APP_BASEURL}/${singleProduct.product_img}`}
                    alt=""
                    height={50}
                    className="detail-image"
                  />
                  <img
                    src={`${process.env.REACT_APP_BASEURL}/${singleProduct.product_img}`}
                    alt=""
                    className="detail-image"
                    height={50}
                  />
                  <img
                    src={`${process.env.REACT_APP_BASEURL}/${singleProduct.product_img}`}
                    alt=""
                    height={50}
                    className="detail-image"
                  />
                </div>
                <div className="detail-buttons">
                  <Button
                    icon={<ShoppingCartOutlined />}
                    onClick={cartHandler}
                    className="detail-btn"
                  >
                    Add to cart
                  </Button>
                  <Button
                    icon={<RocketOutlined />}
                    className="detail-btn2"
                    onClick={BuyHandler}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
              <div className="detail-product-details">
                <h2>{singleProduct.product_name}</h2>
                <p>{singleProduct.description}</p>

                <h3>$ {singleProduct.price}</h3>
                <div>
                  <Button onClick={decrement}>-</Button>
                  {count}
                  <Button onClick={increment}>+</Button>
                </div>
                <Divider />
                <div className="offer-img">
                  <div className="img-wrapper">
                    <img
                      src="https://m.media-amazon.com/images/G/31/A2I_CEPC/VSX/vsx_sprite_2x.png"
                      alt=""
                      height="100"
                      className="img-scroll"
                    />
                  </div>
                  <h4>Offer</h4>
                </div>
                <div className="offer-wrapper">
                  <Offer />
                </div>
                <Divider />
                <div className="delivery-wrapper">
                  <Other />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spin tip="Loading" size="large" className="spinner">
          <div className="content" />
        </Spin>
      )}
    </div>
  );
}

export default Detail;
