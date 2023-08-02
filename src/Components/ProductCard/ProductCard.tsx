import React from "react";
import { Button, Card } from "antd";
import "./ProductCard.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Meta } = Card;

function ProductCard(Props:any) {
  return (
    <div className="product-card-wrapper">
      <Card
        hoverable
        cover={<img alt="example" src={Props.img} height={140} />}
        className="product-card"
      >
        <Meta title={Props.title}  />
        <h3>{Props.price}</h3>
        <div className="product-card-sub">
            {/* <Button>Buy</Button> */}
            <ShoppingCartOutlined className="cart-icon" />
        </div>

      </Card>
    </div>
  );
}

export default ProductCard;
