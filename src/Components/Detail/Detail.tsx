import React, { useEffect, useState } from "react";
import "./Detail.scss";
import img from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import { Button, Divider, Spin } from "antd";
import {
  DownOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Typography } from "antd";
import { Select, Space } from "antd";
import ProductCard from "../ProductCard/ProductCard";

import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  cleanSingleProduct,
  getSingleProduct,
} from "../../Redux/Action/Action";
import Offer from "../Offer/Offer";
import OtherCard from "../OtherCard/OtherCard";
import Other from "../Other/Other";

function Detail() {
  const location = useLocation();
  const dispatch = useDispatch();
  const singleProduct = useSelector(
    (state: any) => state.ecommerce.singleProduct
  );

  const [detailProduct, setDetailProduct] = useState<any>([]);

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);

  const [count, setCount] = useState<number>(0);

  const increment = () => {
    let temp = count + 1;
    setCount(temp);
  };

  const decrement = () => {
    let temp = count - 1;
    if (temp < 1) {
      temp = 1;
    }
    setCount(temp);
  };

  const handleChange = (value: any) => {
    console.log("value", value);
  };

  const cartHandler = () => {
    console.log("cart ", location.state.id, count);
    let data = {
      id: location.state.id,
      quantity: count,
    };
    dispatch(addToCart(data));
  };

  useEffect(() => {
    dispatch(cleanSingleProduct());

    console.log("location", location.state.id);
    dispatch(getSingleProduct(location.state.id));
    setDetailProduct(singleProduct);
  }, []);

  return (
    <>
      {singleProduct.id ? (
        <div className="parentd">
          <div className="detail-parent-wrapper">
            <div className="detail-wrapper">
              <div className="detail-product-image">
                <img
                  src={`http://192.168.1.69:8000/${singleProduct.product_img}`}
                  alt=""
                  className="detail-image"
                />
                <div className="small-img">
                  <img
                    src={`http://192.168.1.69:8000/${singleProduct.product_img}`}
                    alt=""
                    className="detail-image"
                  />
                  <img
                    src={`http://192.168.1.69:8000/${singleProduct.product_img}`}
                    alt=""
                    className="detail-image"
                  />
                  <img
                    src={`http://192.168.1.69:8000/${singleProduct.product_img}`}
                    alt=""
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
                  <Button icon={<RocketOutlined />} className="detail-btn2">
                    Buy Now{" "}
                  </Button>
                </div>
              </div>
              <div className="detail-product-details">
                <h2>{singleProduct.product_name}</h2>
                <p>{singleProduct.description}</p>

                <h3>{singleProduct.price}$</h3>
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
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      )}
    </>
  );
}

export default Detail;
