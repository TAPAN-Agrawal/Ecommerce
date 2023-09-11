import React from "react";
import "./OtherCard.scss";

interface Other{
  img: string,
  description: string
}

function OtherCard(Props: Other) {
  return (
    <div className="OtherCard-wrapper">
      <img src={Props.img} alt="" height="50" />
      <a href="">{Props.description}</a>
    </div>
  );
}

export default OtherCard;
