import React from "react";
import "./WeOfferCompStyle.scss";
import WeOfferBrands from "../../Images/weOfferBrands.png";
import getRewards from "../../Images/getRewards.png";

function WeOfferComp() {
  return (
    <section className="weOfferCont">
      <h2>we offer a new experience for brands</h2>
      <img src={WeOfferBrands} className="weOfferBrandImg" />
      <img src={getRewards} className="getRewardsImg" />
    </section>
  );
}

export default WeOfferComp;
