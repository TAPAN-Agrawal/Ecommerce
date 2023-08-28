import React, { useEffect, useState } from "react";
import "./CartCard.scss";
import { Button, Card, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteCartItems, updateQuantityCart } from "../../../Redux/Action/Action";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface updateQuantityCartInterface {
  id: number;
  count: number;
}

function CartCard(Props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState<number>(Props.quantity || 0);
  const [totalconst, settotalConst] = useState(Props.totalQuantity);

  const increment = () => {
    let temp = count + 1;

    if (totalconst - 1 >= 1) {
      setCount(temp);
      settotalConst((prev: any) => prev - 1);
      let inc: updateQuantityCartInterface = {
        id: Props.id,
        count: temp,
      };
      dispatch(updateQuantityCart(inc));
    } else {
     
    }
  };

  const decrement = () => {
    let temp = count - 1;

    if (temp >= 1) {
      setCount(temp);
      settotalConst((prev: any) => prev + 1);
      let dec: updateQuantityCartInterface = {
        id: Props.id,
        count: temp,
      };
      dispatch(updateQuantityCart(dec));
    } else {
      // dispatch(deleteCartItems(Props.id));
    }
  };

  const confirm = (id: any) => {
    dispatch(deleteCartItems(id));
  };
  const cancel = (e: React.MouseEvent<HTMLElement>) => {};

  const detailPageHandler=()=>{
    navigate('/detail', {
      state: {
        id: Props.product_id,
      },
    }
    )
  }


  useEffect(()=>{
    setCount(Props.quantity)
  },[Props.quantity])


 
 
  

  return (
    <div className="CartCard-wrapper">
      <Card className="CartCard">
        <div className="CartCart-left"
         onClick={detailPageHandler}
    >
          <img
            src={`${process.env.REACT_APP_BASEURL}/${Props.img}`}
            alt=""
            className="CartCard-img"
            height="100"
          />
        </div>
        <div className="CartCart-right">
          <h3 onClick={detailPageHandler}>{Props.title}</h3>
          <p>{Props.description.slice(0,140)}</p>
          <h4>$ {Props.price}</h4>

          <div className="count-delete">
            <div>
             {count < 2 ? <Popconfirm 
              title="Delete this item"
              description="Are you sure to delete this item from cart?"
              onConfirm={() => confirm(Props.id)}
              onCancel={() => cancel}
              okText="Yes"
              cancelText="No">
             <Button onClick={decrement}>-</Button>
             </Popconfirm>:<Button onClick={decrement}>-</Button>}
              {Props.quantity}
              <Button onClick={increment}>+</Button>
            </div>
            <div className="delete">
              <Popconfirm
                title="Delete this item"
                description="Are you sure to delete this item from cart?"
                onConfirm={() => confirm(Props.id)}
                onCancel={() => cancel}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartCard;
