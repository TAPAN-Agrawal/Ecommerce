import React, { useEffect, useState } from "react";
import "./Detail.scss";
import img from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import { Button } from "antd";
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
import img6 from '../../Assets//Images//Products/3207188-removebg-preview.png';
import img7 from '../../Assets//Images//Products/image.png';
import img8 from '../../Assets/Images//Products/tijh_5r3p_210608.jpg';
import { Rate } from 'antd';
function Detail() {
  const quantity=[{value:1, label:"1"},
  {value:2, label:"2"},
  {value:3, label:"3"},
{value:4,label:"4"},
{value:5,label:"5"},
{value:6,label:"6"},
{value:7,label:"7"},
{value:8,label:"8"},
{value:9,label:"9"},
{value:10,label:"10"},]
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const [value, setValue] = useState(3);

  const handleChange = (value:any)=>{
    console.log('value',value)
  }
  return (
    <div className="parentd">
    <div className="detail-parent-wrapper">
      <div className="detail-wrapper">
        <div className="detail-product-image">
          <img src={img} className="detail-image" />
        </div>
        <div className="detail-product-details">
          <p>
          Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+ Sports Modes, 240 * 240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating (Black)
          </p>
          <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
          <h3>120$</h3>
          
            <Space wrap>
              <Select
                defaultValue={0}
                style={{ width: 120 }}
                onChange={handleChange}
                options={quantity}
              />
            </Space>
       
          <Button icon={<ShoppingCartOutlined/>}>Add to cart</Button>
          <br />
          <Button size="large">Buy Now </Button>
        </div>
      </div>
    </div>
    <h1>Suggested</h1>
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
         
         
          </div>
    </div>
  );
}

export default Detail;
