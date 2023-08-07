import React, { useEffect, useState } from "react";
import "./CartCard.scss";
// import img from "../../Assets/Images/Products/image.png";
import { Button, Card, Select, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getProductsInCart } from "../../Redux/Action/Action";

function CartCard(Props:any) {
  const dispatch = useDispatch()
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);
  const [count, setCount] = useState<number>(Props.quantity || 0);

  const increment = () => {
    let temp = count + 1;
    setCount(temp);
  };

  const decrement = () => {
    let temp = count - 1;
    if(temp < 1){
      temp=1;
    }
    setCount(temp);
  };

  const handleChange = (value: any) => {
    console.log("value", value);
  };

 
  return (
    <div className="CartCard-wrapper">
      <Card className="CartCard">
        <div className="CartCart-left">
          <img src={`${process.env.REACT_APP_BASEURL}/${Props.img}`} className="CartCard-img" />
        </div>
        <div className="CartCart-right">
          <h3>{Props.title}</h3>
          <p>
            {Props.description}
          </p>
          <h3>{Props.price}$</h3>
          
           <div>
                  <Button onClick={decrement}>-</Button>
                  {count}
                  <Button onClick={increment}>+</Button>
                </div>
          <div className="delete">
          <DeleteOutlined onClick={()=>console.log('delete cart item',Props.id)}/>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartCard;
