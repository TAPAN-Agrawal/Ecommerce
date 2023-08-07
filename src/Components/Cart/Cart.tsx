import React, { useEffect } from "react";
import "./Cart.scss";
import CartCard from "../CartCard/CartCard";
import { Card } from "antd";
import CartPrice from "../CartPrice/CartPrice";
import { useDispatch } from "react-redux";
import { getProductsInCart } from "../../Redux/Action/Action";
import { useSelector } from "react-redux";

function Cart() {
  const cartItem = useSelector((state:any)=>state.ecommerce.cartItems)
  console.log("first,cartItem", cartItem);
  
  const dispatch = useDispatch()

  const cart = cartItem.map((item:any)=>(  
    <CartCard id={item.id} img={item.product_img} description={item.description} title={item.product_name} price={item.price} quantity={item.quantity}/>
   
  ))

  useEffect(()=>{
    dispatch(getProductsInCart())
  },[])
  return (
   <>
   {cartItem.length !== 0 &&  <div className="cart-wrapper">
      <div className="cart-wrapper-child">
        <div className="left-child">
          <Card title="Cart Items">
         {cart}
        
          
          </Card>
        </div>
        <div className="right-child">
          <CartPrice />
        </div>
      </div>
    </div>}
   </>
  );
}

export default Cart;
