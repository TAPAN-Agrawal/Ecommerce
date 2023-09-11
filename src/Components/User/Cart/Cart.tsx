import React, { useEffect } from "react";
import "./Cart.scss";
import CartCard from "../CartCard/CartCard";
import { Button, Card, Divider } from "antd";
import CartPrice from "../CartPrice/CartPrice";
import { useDispatch } from "react-redux";
import { getProductsInCart } from "../../../Redux/Action/Action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../../Assets/Images/emptycart-removebg-preview.png";
import { toastMsg } from "../../../constants/constant";

function Cart() {
  const cartItem = useSelector((state: any) => state.ecommerce.cartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = cartItem.map((item: any, key: any) => (
    <CartCard
      key={item.id}
      id={item.id}
      img={item.product_img}
      description={item.description}
      title={item.product_name}
      price={item.price}
      quantity={item.quantity}
      totalQuantity={item.totalQuantity}
      product_id={item.product_id}
    />
  ));

  const price = cartItem.map((item: any, key: any) => {
    return {
      id: item.id,
      item: item.product_name,
      price: item.price * item.quantity,
      quantity: item.quantity,
    };
  });
  const ckeckoutHandler = () => {
    navigate("/checkout", {
      state: {
        p: price,
        isCalledFromCart: true,
      },
    });
  };

  const backHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    let role = localStorage.getItem("role");
    if (role !== "2") {
      navigate("/login");
      toast.error(`${toastMsg.unauthorized}`);
      return;
    }

    dispatch(getProductsInCart());
  }, []);
  return (
    <div className="parent-cart">
      <div className="Back-Front-btn">
        <Button type="text" onClick={backHandler}>
          Back
        </Button>
      </div>
      {cartItem.length !== 0 ? (
        <div className="cart-wrapper">
          <div className="cart-wrapper-child">
            <div className="left-child">
              <Card>
                <h2>Shopping Cart</h2>
                <Divider />
                {cartItems}
              </Card>
            </div>
            <div className="right-child">
              <CartPrice priceList={price} />
              <Button onClick={ckeckoutHandler}>Checkout</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-item">
          <img src={img} alt="emptycart" />
        </div>
      )}
    </div>
  );
}

export default Cart;
