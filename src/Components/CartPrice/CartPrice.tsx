import React from "react";
import './CartPrice.scss'
import { Button, Card, Divider } from "antd";
import { useNavigate } from "react-router-dom";

function CartPrice() {
  const navigate = useNavigate()
    const purchased = ()=>{
      navigate('/checkout')
      // navigate('/purchased')
    }
  return <div className="CartPrice-wrapper">
    <Card className="CartPrice-Card">
    <div>
      <img src='https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_640.jpg' height='150px' width='250'/>
    </div>

      <h3>Order Summary</h3>
       <div className="item">
       <div>
    Subscription
        </div>
        <div>+10$ </div>
       </div>
       <div className="item">
       <div>
    Coupan:Free 20
        </div>
        <div>-10$ </div>
       </div>
       <Divider/>
       <div className="item">
       <div>
   Total:items
        </div>
        <div>5 </div>
       </div> 
       <Divider/>
      <div className="item">
      <h2>Total Amount</h2>
       <h2>700$</h2>
      </div>
   
    {/* <Button size="large" onClick={purchased}>Buy</Button> */}
    </Card>
  </div>;
}

export default CartPrice;
