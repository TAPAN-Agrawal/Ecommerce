import React from "react";
import "./OfferCard.scss";

interface OfferCardInterface {
  title: string;
  description: string;
}

function OfferCard(Props: OfferCardInterface) {
  return (
    <div className="offer-card-wrapper">
      <div className="offer-card-heading">{Props.title}</div>
      <div className="offer-card-description">{Props.description}</div>
      <a href="">2 offers {">"} </a>
    </div>
  );
}

export default OfferCard;
