import React from "react";
import "./Offer.scss";
import OfferCard from "../OfferCard/OfferCard";

function Offer() {
  return (
    <div className="offer-wrapper">
      <OfferCard
        title="No Cost EMI"
        description="
Upto ₹2,484.09 EMI interest savings on select Credit .."
      />
      <OfferCard
        title="No Cost EMI"
        description="
Upto ₹2,484.09 EMI interest savings on select Credit .."
      />
      <OfferCard
        title="No Cost EMI"
        description="
Upto ₹2,484.09 EMI interest savings on select Credit .."
      />
    </div>
  );
}

export default Offer;
