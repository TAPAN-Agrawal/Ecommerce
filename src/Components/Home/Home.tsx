import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Spin } from "antd";
import "./Home.scss";
import img from "../../Assets/Images/skin-care-banner-concept-with-lotion.jpg";
import img1 from "../../Assets/Images/728.jpg";
import img2 from "../../Assets/Images/collection-beauty-products-with-copy-space.jpg";
import img3 from "../../Assets/Images/cosmetic-containers-with-orange.jpg";
import img4 from "../../Assets/Images/free-photo-beauty-product-bottle-mockup-image-with-background.jpg";
import img5 from "../../Assets/Images/Products/2112.i211.002.S.m012.c13.headphones wireless realistic composition 5.jpg";
import img6 from "../../Assets//Images//Products/3207188-removebg-preview.png";
import img7 from "../../Assets//Images//Products/image.png";
import img8 from "../../Assets/Images//Products/tijh_5r3p_210608.jpg";
import ProductCard from "../ProductCard/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/Action/Action";
import env from "react-dotenv";

// import { increment, setProducts } from "../../Redux/Action/Action";

function Home() {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
const navigate = useNavigate()
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.ecommerce.products);
  const [products, setProducts] = useState([]);
  // console.log("first product",data);

  const singleProductHandler =(id:any)=>{
    dispatch(getSingleProduct(id));
     navigate('/detail',{
      state:{
        id: id,
      }
    })
  }

  const mapProducts = products.map((product: any, key) => {
    return (
      <div
        className="home-card"
        key={product.id}
        onClick={()=>singleProductHandler(product.id)}
       
      >
        <ProductCard
          img={product.product_img}
          title={product.product_name}
          price={product.price}
        />
      </div>
    );
  });
  useEffect(() => {
    dispatch(getAllProducts(1, 7));
    // setProducts(data)
  }, []);

  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <>
      {products ? (
        <div className="home-wrapper">
          <div className="home-slider">
            <Carousel autoplay>
              <div>
                <img src={img} className="home-img" />
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
              <div className="home-men-section">{mapProducts}</div>
              <Link to="/" className="Link">
                more items..
              </Link>
              <h1>Women</h1>

              <div className="home-women-section">{mapProducts}</div>
              <Link to="/" className="Link">
                more items..
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </>
  );
}

export default Home;
