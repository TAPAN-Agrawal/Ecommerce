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
        cover={<img alt="example" src={`http://192.168.1.69:8000/${Props.img}`} height={140} />}
        className="product-card"
      >
        <Meta title={Props.title}  />
        <h3>{Props.price}</h3>
        <div className="product-card-sub">
            {/* <Button>Buy</Button> */}
           {/* <div > <ShoppingCartOutlined className="cart-icon"  onClick={()=>console.log("hello cart react")}/></div> */}
        </div>

      </Card>
    </div>
  );
}

export default ProductCard;
