import React, { useEffect } from "react";
import "./Cart.scss";
import CartCard from "../CartCard/CartCard";
import { Button, Card } from "antd";
import CartPrice from "../CartPrice/CartPrice";
import { useDispatch } from "react-redux";
import { getProductsInCart } from "../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BreadCrumComp from "../BreadCrumComponent/BreadCrumComp";

function Cart() {
  const cartItem = useSelector((state: any) => state.ecommerce.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = cartItem.map((item: any) => (
    <CartCard
      id={item.id}
      img={item.product_img}
      description={item.description}
      title={item.product_name}
      price={item.price}
      quantity={item.quantity}
      totalQuantity={item.totalQuantity}
    />
  ));

  const price = cartItem.map((item: any) => {
    return {
      item: item.product_name,
      price: item.price * item.quantity,
      quantity: item.quantity,
    };
  });
  const ckeckoutHandler = () => {
    navigate("/checkout", {
      state: {
        p: price,
        isCalledFromCart: true
      },
    });
  };

  useEffect(() => {
    let role = localStorage.getItem("role");
    if(role !== '2'){
      navigate('/login');
      toast.error('you are not authorized only for uers!')
      return
    }

      dispatch(getProductsInCart());
   
  }, []);
  return (
    <div className="parent-cart">
      {/* <BreadCrumComp name='cart'/> */}
      <div className="Back-Front-btn">
      <Button type="text" onClick={()=>navigate(-1)}>{'<'} Back</Button>
      </div>
      {cartItem.length !== 0 ? (
        <div className="cart-wrapper">
          <div className="cart-wrapper-child">
            <div className="left-child">
              <Card title="Cart Items">{cart}</Card>
            </div>
            <div className="right-child">
              <CartPrice priceList={price} />
              <Button onClick={ckeckoutHandler}>Checkout</Button>
            </div>
          </div>
        </div>
      ):<div className="no-item">No items in cart..</div>}
    </div>
  );
}

export default Cart;
