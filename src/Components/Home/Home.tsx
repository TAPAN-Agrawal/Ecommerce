import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Pagination, Spin } from "antd";
import "./Home.scss";
import img from "../../Assets/Images/CD4323_Inventory-Management_Apr-2022_V2_Header.jpg";
import img1 from "../../Assets/Images/CD4323_Inventory-Management_Apr-2022_V2_Header.jpg";
import img2 from "../../Assets/Images/CD4323_Inventory-Management_Apr-2022_V2_Header.jpg";
import img3 from "../../Assets/Images/2slider.jpeg";
import img4 from "../../Assets/Images/4slider.jpg";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.ecommerce.products);
  const searchProduct = useSelector((state: any) => state.ecommerce.searchResults[0])
  // console.log('object',searchProduct.length);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState<any>(null);

  console.log("all product", data);

  const singleProductHandler = (id: any) => {
    dispatch(getSingleProduct(id));
    navigate("/detail", {
      state: {
        id: id,
      },
    });
  };
  const menHandler = () => {
    setSelectedButton(0);
    const menProducts = products.filter(
      (product: any) => product.category === 0
    );
    setCategory(menProducts);
    console.log("men products", menProducts);
  };
  const womenHandler = () => {
    setSelectedButton(1);

    const womenProducts = products.filter(
      (product: any) => product.category === 1
    );
    setCategory(womenProducts);
    console.log("woman products", womenProducts);
  };
  const allHandler = () => {
    setSelectedButton(null);

    setCategory(products);
  };

  const pageHandler = (e: number) => {
    setPage(e);
  };
  const mapProducts = category.map((product: any, key) => {
    return (
      <div
        className="home-card"
        key={product.id}
        onClick={() => singleProductHandler(product.id)}
      >
        <ProductCard
          img={product.product_img}
          title={product.product_name}
          price={product.price}
          description={product.description}
        />
      </div>
    );
  });

// const searchMap =

  useEffect(() => {
    dispatch(getAllProducts(page, 10, selectedButton));
  }, [page, selectedButton]);

  useEffect(() => {
    setProducts(data);
    setCategory(data);
  }, [data]);
  return (
    <>
      {products ? (
        <div className="home-wrapper">
         {/* {
          searchProduct.length !== 0 &&  
          searchProduct.map((product: any, key:any)=>{
  return (
    <div
      className="home-card"
      key={product.id}
      onClick={() => singleProductHandler(product.id)}
    >
      <ProductCard
        img={product.product_img}
        title={product.product_name}
        price={product.price}
        description={product.description}
      />
    </div>
  );
})
         } */}
        {/* {searchProduct !== null && searchProduct.length !== 0 ? (
  <div>
    helo
  </div>
) : null} */}

          <div className="home-slider">
            <Carousel autoplay>
              <div>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg' className="home-img" />
              </div>
              <div>
              <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg' className="home-img" />

              </div>
              <div>
              <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg' className="home-img" />

              </div>
              <div>
              <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg' className="home-img" />

              </div>
            </Carousel>
          </div>

          <div className="home-wrapper-child">
            {/* <div>
              <iframe
                width="260"
                height="500"
                src="https://www.youtube.com/embed/I-t2mwrYc6s"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div> */}
            <div className="home-combine-section">
              <h1>Top Offers</h1>
              <div className="category">
                <Button
                  onClick={menHandler}
                  className={selectedButton === 0 ? "selected" : ""}
                >
                  Men
                </Button>
                <Button
                  onClick={womenHandler}
                  className={selectedButton === 1 ? "selected" : ""}
                >
                  Women
                </Button>
                <Button onClick={allHandler}
                  className={selectedButton === null ? "selected" : ""}
                  >All</Button>
              </div>
              <div className="home-men-section">{mapProducts}</div>
            </div>
            {/* <div>
            <iframe width="10" height="700" src="https://www.youtube.com/embed/6Ij9PiehENA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div> */}
          </div>
          <Pagination defaultCurrent={1} total={80} onChange={pageHandler} />
        </div>
      ) : (
        <Spin size="large" />
      )}
    </>
  );
}

export default Home;
