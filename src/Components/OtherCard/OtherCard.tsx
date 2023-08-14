import React from "react";
import "./OtherCard.scss";

function OtherCard(Props: { img: string; description: string }) {
  return (
    <div className="OtherCard-wrapper">
      <img src={Props.img} alt="" height="50" />
      <a href="">{Props.description}</a>
    </div>
  );
}

export default OtherCard;
