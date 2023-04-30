import React from "react";
import styles from "./WeOfferCompStyle.module.scss";
import WeOfferBrands from "../../Images/weOfferBrands.png";
import getRewards from "../../Images/getRewards.png";

function WeOfferComp() {
  return (
    <section className={styles.weOfferCont}>
      <h2>we offer a new experience for brands</h2>
      <img src={WeOfferBrands} className={styles.weOfferBrandImg} />
      <img src={getRewards} className={styles.getRewardsImg} />
    </section>
  );
}

export default WeOfferComp;
