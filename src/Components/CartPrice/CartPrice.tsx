import React from "react";
import "./CartPrice.scss";
import { Card, Divider } from "antd";
import { useNavigate } from "react-router-dom";

function CartPrice({ priceList }: any) {
  const navigate = useNavigate();

  const priceListMap = priceList.map((item: any, key: any) => (
    <div className="item">
      <div>
        {item.item} x({item.quantity})
      </div>
      <div>{item.price}$</div>
    </div>
  ));

  var t = 0;
  const totalAmount = priceList.map((x: any, key: any) => {
    t += Number(x.price);
    return t;
  });

  const purchased = () => {
    navigate("/checkout");
  };
  return (
    <div className="CartPrice-wrapper">
      <Card className="CartPrice-Card">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_640.jpg"
            height="150px"
            width="250"
            alt=""
          />
        </div>

        <h3>Order Summary</h3>
        <div className="item">
          <div>Subscription</div>
          <div>+10$ </div>
        </div>
        <div className="item">
          <div>Coupan:Free 20</div>
          <div>-10$ </div>
        </div>
        <Divider />
        {priceListMap}
        <div className="item">
          <h3>TotalTtems:</h3>
          <div>{priceListMap.length} </div>
        </div>
        <Divider />
        <div className="item">
          <h3>Total Amount</h3>
          <h2>$ {t}</h2>
        </div>
      </Card>
    </div>
  );
}

export default CartPrice;
