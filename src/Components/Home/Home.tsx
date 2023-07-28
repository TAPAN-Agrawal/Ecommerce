import React from "react";
import { Card, Carousel } from "antd";
import "./Home.scss";
import img1 from '../../Assets/Images/728.jpg';
import img2 from '../../Assets/Images/collection-beauty-products-with-copy-space.jpg'
import img3 from '../../Assets/Images/cosmetic-containers-with-orange.jpg';
import img4 from '../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg';

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
            <img src={img1} className="home-img"/>
          </div>
          <div>
          <img src={img2} className="home-img"/>

          </div>
          <div>
          <img src={img3} className="home-img"/>

          </div>
          <div>
          <img src={img4} className="home-img"/>

          </div>
        </Carousel>
      </div>
      <div className="home-wrapper-child">
        <div className="home-combine-section">
          <div className="home-men-section">
          
            
    

          </div>
          <div className="home-women-section"></div>
        </div>
        <div className="home-children-section"></div>
      </div>
    </div>
  );
}

export default Home;
