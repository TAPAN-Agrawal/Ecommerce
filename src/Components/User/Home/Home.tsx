import React, { useEffect, useState } from "react";
import { Button, Carousel, Empty, Pagination, Select, Spin } from "antd";
import "./Home.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllProducts,
  setSingleProductInitial,
} from "../../../Redux/Action/Action";
import { carouselImg } from "../../../constants/constant";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.ecommerce.products);
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [page, setPage] = useState<any>(sessionStorage.getItem("page") || 1);
  const [sort, setSort] = useState(null);
  const [selectedButton, setSelectedButton] = useState<any>(null);

  const singleProductHandler = (id: number) => {
    navigate(`/detail/${id}`, {
      state: {
        id: id,
      },
    });
  };
  const menHandler = () => {
    setPage(1);
    setSelectedButton(0);
    sessionStorage.setItem("selected", "0");
    sessionStorage.setItem("page", "1");
    const menProducts = products.filter(
      (product: any) => product.category === 0
    );
    setCategory(menProducts);
  };
  const womenHandler = () => {
    setPage(1);
    setSelectedButton(1);
    sessionStorage.setItem("selected", "1");
    sessionStorage.setItem("page", "1");

    const womenProducts = products.filter(
      (product: any) => product.category === 1
    );
    setCategory(womenProducts);
  };
  const allHandler = () => {
    setPage(1);
    sessionStorage.setItem("selected", "null");
    sessionStorage.setItem("page", "1");

    setSelectedButton(null);
    setCategory(products);
  };

  const handleChange = (e: any) => {
    setSort(e);
  };

  const pageHandler = (e: number) => {
    setPage(e);
    sessionStorage.setItem("page", e.toString());
  };
  const mapProducts: any = category.map((product: any, key: any) => {
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
    dispatch(setSingleProductInitial());
    var selectedCategoryStr = sessionStorage.getItem("selected");
    var selectedCategory;

    if (selectedCategoryStr !== null) {
      selectedCategory = Number(selectedCategoryStr);
    }

    if (selectedCategory === 0 || selectedCategory === 1) {
      setSelectedButton(selectedCategory);
      if (selectedButton !== null) {
        dispatch(getAllProducts(page, 12, selectedCategory, sort));
      }
    } else {
      dispatch(getAllProducts(page, 12, selectedButton, sort));
    }
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
                  src={carouselImg}
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                   src={carouselImg}
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                  src={carouselImg}
                  alt=""
                  className="home-img"
                />
              </div>
              <div>
                <img
                  src={carouselImg}
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
                    className={
                      selectedButton === 0 ? "selected" : "not-selected"
                    }
                  >
                    Men
                  </Button>
                  <Button
                    onClick={womenHandler}
                    className={
                      selectedButton === 1 ? "selected" : "not-selected"
                    }
                  >
                    Women
                  </Button>
                  <Button
                    onClick={allHandler}
                    className={
                      selectedButton === null ? "selected" : "not-selected"
                    }
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

              {mapProducts.length >= 1 ? (
                <div className="home-men-section">{mapProducts}</div>
              ) : (
                <div className="home-men-section">
                  {" "}
                  <Empty className="empty" />
                </div>
              )}
            </div>
          </div>
          <Pagination
            current={page}
            defaultCurrent={1}
            total={pageCalculator}
            onChange={pageHandler}
            className="pagination"
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
