import React from "react";
import { Card, Carousel } from "antd";
import "./Home.scss";
import img1 from "../../Assets/Images/728.jpg";
import img2 from "../../Assets/Images/collection-beauty-products-with-copy-space.jpg";
import img3 from "../../Assets/Images/cosmetic-containers-with-orange.jpg";
import img4 from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import img5 from "../../Assets/Images/Products/2112.i211.002.S.m012.c13.headphones wireless realistic composition 5.jpg";
import img6 from '../../Assets//Images//Products/3207188-removebg-preview.png';
import img7 from '../../Assets//Images//Products/image.png';
import img8 from '../../Assets/Images//Products/tijh_5r3p_210608.jpg'
import ProductCard from "../ProductCard/ProductCard";

function Home() {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <div className="home-wrapper">
      <div className="home-slider">
        <Carousel autoplay>
          <div>
            <img src={img1} className="home-img" />
          </div>
          <div>
            <img src={img2} className="home-img" />
          </div>
          <div>
            <img src={img3} className="home-img" />
          </div>
          <div>
            <img src={img4} className="home-img" />
          </div>
        </Carousel>
      </div>
      <div className="home-wrapper-child">
        <div className="home-combine-section">
          <h1>Men</h1>
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
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img6} title="Wireless Earpods" price="150$" />
            </div> 
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
             <div className="home-card">
              <ProductCard img={img7} title="Wireless Earpods" price="150$" />
            </div>
              <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
          </div>
          <h1>Women</h1>

          <div className="home-women-section">
          <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img6} title="Wireless Earpods" price="150$" />
            </div> 
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
             <div className="home-card">
              <ProductCard img={img7} title="Wireless Earpods" price="150$" />
            </div>
              <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
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
          {/* <h1>Children</h1> */}
        <div className="home-children-section">
        <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img6} title="Wireless Earpods" price="150$" />
            </div> 
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
             <div className="home-card">
              <ProductCard img={img7} title="Wireless Earpods" price="150$" />
            </div>
              <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
            </div>  
            <div className="home-card">
              <ProductCard img={img5} title="Wireless Earpods" price="150$" />
            </div>
            <div className="home-card">
              <ProductCard img={img8} title="Wireless Earpods" price="150$" />
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
    </div>
  );
}

export default Home;
