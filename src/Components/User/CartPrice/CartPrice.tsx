import React from "react";
import "./CartPrice.scss";
import { Card, Divider } from "antd";

interface Price{
  id:string,
  item: string,
  price: string,
  quantity:string,
}

function CartPrice({ priceList }: any) {

  const priceListMap = priceList.map((item: any, key: any) => (
    <div className="item" key={item.id}>
      <p>
        {item.item} x({item.quantity})
      </p>
      <p>{item.price}$</p>
    </div>
  ));

  var t = 0;
  const totalAmount = priceList.map((x: any) => {
    t += Number(x.price);
    return t;
  });

 
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
          <p>Subscription</p>
          <p>+10$ </p>
        </div>
        <div className="item">
          <p>Coupan:Free 20</p>
          <p>-10$ </p>
        </div>
        <Divider />
        {priceListMap}
        <div className="item">
          <h3>Total-Items:</h3>
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
