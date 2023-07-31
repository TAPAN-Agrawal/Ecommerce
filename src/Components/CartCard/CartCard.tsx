import React, { useState } from "react";
import "./CartCard.scss";
import img from "../../Assets/Images/Products/image.png";
import { Card, Select, Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function CartCard() {
  const quantity = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);

  const handleChange = (value: any) => {
    console.log("value", value);
  };
  return (
    <div className="CartCard-wrapper">
      <Card className="CartCard">
        <div className="CartCart-left">
          <img src={img} className="CartCard-img" />
        </div>
        <div className="CartCart-right">
          <p>
            {" "}
            Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3",120+
            Sports Modes, 240 * 240 PX High Res with SpO2, Heart Rate Monitoring
            & IP67 Rating (Black)
          </p>
          <h3>170$</h3>
          <Space wrap>
            <Select
              defaultValue={0}
              style={{ width: 120 }}
              onChange={handleChange}
              options={quantity}
            />
          </Space>
          <div className="delete">
          <DeleteOutlined />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CartCard;
