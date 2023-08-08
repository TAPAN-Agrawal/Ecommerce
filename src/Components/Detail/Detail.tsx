import React, { useEffect, useState } from "react";
import "./Detail.scss";
import img from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import { Button, Spin } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Typography } from "antd";
import { Select, Space } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import img1 from "../../Assets/Images/728.jpg";
import img2 from "../../Assets/Images/collection-beauty-products-with-copy-space.jpg";
import img3 from "../../Assets/Images/cosmetic-containers-with-orange.jpg";
import img4 from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import img5 from "../../Assets/Images/Products/2112.i211.002.S.m012.c13.headphones wireless realistic composition 5.jpg";
import img6 from "../../Assets//Images//Products/3207188-removebg-preview.png";
import img7 from "../../Assets//Images//Products/image.png";
import img8 from "../../Assets/Images//Products/tijh_5r3p_210608.jpg";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  cleanSingleProduct,
  getSingleProduct,
} from "../../Redux/Action/Action";

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
                  className="detail-image"
                />
              </div>
              <div className="detail-product-details">
                <h2>{singleProduct.product_name}</h2>
                <p>{singleProduct.description}</p>

                <h3>{singleProduct.price}$</h3>
                <div className="offer-wrapper">offer</div>
                <div className="delivery-wrapper">deliver</div>
                <div>
                  <Button onClick={decrement}>-</Button>
                  {count}
                  <Button onClick={increment}>+</Button>
                </div>

                <Button icon={<ShoppingCartOutlined />} onClick={cartHandler}>
                  Add to cart
                </Button>
                <br />
                <Button size="large">Buy Now </Button>
              </div>
            </div>
          </div>
          {/* <h1>Suggested</h1>
          <div className="home-men-section">
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img6} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img7} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>
          </div> */}
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
