import React, { useEffect } from "react";
import './SearchedProduct.scss'
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleProduct, searchProduct } from "../../Redux/Action/Action";
import ProductCard from "../ProductCard/ProductCard";

function SearchedProduct() {
  const navigate = useNavigate()
 const dispatch = useDispatch()
  const {state} = useLocation()
  const searchResult = useSelector((state:any)=>state.ecommerce.searchResults)
  console.log('searchResult', searchResult.length)

  const singleProductHandler = (id: any) => {
    dispatch(getSingleProduct(id));
    navigate("/detail", {
      state: {
        id: id,
      },
    });
  };

const searchMap = searchResult.map((product: any, key:any) => {
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
  

useEffect(()=>{
  let searchItem= state.searchKey
      if(searchItem){
    dispatch(searchProduct(searchItem, 1, 10));

      }
},[state.searchKey])




  return <div className="search-wrapper">
    {/* <div>
    <iframe width="260" height="715" src="https://www.youtube.com/embed/I-t2mwrYc6s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div> */}
    {searchResult.length <1 ? <div className="no-item">no item found..</div>:<div className="search">
    {searchMap}
    </div>}
  </div>;
}

export default SearchedProduct;
