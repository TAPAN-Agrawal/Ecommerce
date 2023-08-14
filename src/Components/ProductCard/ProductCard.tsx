import React from "react";
import { Button, Card, Rate } from "antd";
import "./ProductCard.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

function ProductCard(Props: any) {
  return (
    <div className="product-card-wrapper">
      <div className="img-wrapper">
        <img
          alt="example"
          src={`http://192.168.1.69:8000/${Props.img}`}
          height={140}
        />
      </div>
      <div className="details-wrapper">
        <div className="detail-name-price">
          <h3>{Props.title}</h3>
          <h4>{Props.price}$</h4>
        </div>
        <div className="description">{Props.description}</div>
        <div>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
