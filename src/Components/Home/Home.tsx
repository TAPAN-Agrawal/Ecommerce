import React, { useEffect, useState } from "react";
import { Button, Carousel, Pagination, Select, Spin } from "antd";
import "./Home.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllProducts, getSingleProduct } from "../../Redux/Action/Action";
import { RightOutlined } from "@ant-design/icons";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.ecommerce.products);
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(null);
  const [selectedButton, setSelectedButton] = useState<any>(null);

  const singleProductHandler = (id: any) => {
    dispatch(getSingleProduct(id));
    navigate("/detail", {
      state: {
        id: id,
      },
    });
  };
  const menHandler = () => {
    setPage(1);
    setSelectedButton(0);
    const menProducts = products.filter(
      (product: any) => product.category === 0
    );
    setCategory(menProducts);
  };
  const womenHandler = () => {
    setPage(1);

    setSelectedButton(1);
    const womenProducts = products.filter(
      (product: any) => product.category === 1
    );
    setCategory(womenProducts);
  };
  const allHandler = () => {
    setPage(1);

    setSelectedButton(null);
    setCategory(products);
  };

  const handleChange = (e: any) => {
    setSort(e);
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
  const pageCalculator = Math.ceil(totalCount / 12) * 10;

  useEffect(() => {
    dispatch(getAllProducts(page, 12, selectedButton, sort));
  }, [page, selectedButton, sort]);

  useEffect(() => {
    setProducts(data);
    setCategory(data);
  }, [data]);
  return (
    <div className="home-parent">
      {products ? (
        <div className="home-wrapper">
          <div className="home-slider">
            <Carousel autoplay>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg"
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg"
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg"
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/AugART/V6/GWeditorial_2300x646._CB599389263_.jpg"
                  alt=""
                  className="home-img"
                />
              </div>
            </Carousel>
          </div>

          <div className="home-wrapper-child">
            <div className="home-combine-section">
              <h1>Top Offers</h1>
              <div className="seperator">
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
                  <Button
                    onClick={allHandler}
                    className={selectedButton === null ? "selected" : ""}
                  >
                    All
                  </Button>
                </div>
                <Select
                  placeholder="range"
                  className="selector"
                  allowClear
                  onChange={handleChange}
                  options={[
                    { value: "asc", label: "low-high" },
                    { value: "desc", label: "high-low" },
                  ]}
                />
              </div>

              <div className="home-men-section">{mapProducts}</div>
            </div>
          </div>
          <Pagination
            current={page}
            defaultCurrent={1}
            total={pageCalculator}
            onChange={pageHandler}
          />
        </div>
      ) : (
        <div className="loader">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}

export default Home;
