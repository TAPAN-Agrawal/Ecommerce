import React from "react";
import "./Other.scss";
import OtherCard from "../OtherCard/OtherCard";

function Other() {
  return (
    <div className="other-wrapper">
      <OtherCard
        img="https://m.media-amazon.com/images/G/31/VAS/TrustWidget/Service._CB607276514_.png"
        description="Paid Brand Installation available"
      />
      <OtherCard
        img="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"
        description="1 Year Warranty"
      />
      <OtherCard
        img="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
        description="10 days Replacement by Brand
"
      />
    </div>
  );
}

export default Other;
