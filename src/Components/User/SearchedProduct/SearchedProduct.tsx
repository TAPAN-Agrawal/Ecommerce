import React, { useEffect, useState } from "react";
import "./SearchedProduct.scss";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleProduct, searchProduct } from "../../../Redux/Action/Action";
import ProductCard from "../../User/ProductCard/ProductCard";
import { Button, Empty, Pagination } from "antd";

function SearchedProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [page, setPage] = useState(1);
  const totalCount = useSelector((state: any) => state.ecommerce.totalCount);

  const searchResult = useSelector(
    (state: any) => state.ecommerce.searchResults
  );

  const singleProductHandler = (id: any) => {
    dispatch(getSingleProduct(id));
    navigate("/detail", {
      state: {
        id: id,
      },
    });
  };
  const pageHandler = (e: number) => {
    setPage(e);
  };
  const searchMap = searchResult.map((product: any, key: any) => {
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
    let searchItem = state.searchKey;
    if (searchItem) {
      dispatch(searchProduct(searchItem, page, 12));
    }
  }, [state.searchKey, page]);

  return (
    <div className="search-wrapper">
      <div className="Back-Front-btn">
        <Button type="text" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
      {searchResult.length < 1 ? (
        <div className="no-item">
          <Empty />
        </div>
      ) : (
        <div>
          <div className="search">{searchMap}</div>

          <Pagination
            current={page}
            defaultCurrent={1}
            total={pageCalculator}
            onChange={pageHandler}
          />
        </div>
      )}
    </div>
  );
}

export default SearchedProduct;
