import React from "react";
import { Rate } from "antd";
import "./ProductCard.scss";

interface Product{
  img:string,
  title:string,
  price:string,
  description:string,
}

function ProductCard(Props: Product) {
  return (
    <div className="product-card-wrapper">
      <div className="img-wrapper">
        <img
          alt="example"
          src={`${process.env.REACT_APP_BASEURL}/${Props.img}`}
          height={140}
        />
      </div>
      <div className="details-wrapper">
        <div className="detail-name-price">
          <h3>{Props.title.slice(0, 16)}</h3>
          <h4>$ {Props.price}</h4>
        </div>
        <div className="description">{Props.description.slice(0, 40)}</div>
        <div>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
