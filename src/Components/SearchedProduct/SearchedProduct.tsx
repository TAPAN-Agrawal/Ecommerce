import React from "react";
import './SearchedProduct.scss'
import { useSelector } from "react-redux";

function SearchedProduct() {
    const data =useSelector((state:any) => state.ecommerce.searchResults[0].data)
    if(data){

        console.log('search',data);
    }
  return <div className="search-wrapper">
    <div className="search">

    </div>
  </div>;
}

export default SearchedProduct;
