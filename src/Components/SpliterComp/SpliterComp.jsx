import React from "react";
import spliterImg from "../../Images/spliterContainer.png";
import styles from "./SpliterCompStyle.module.scss";
function SpliterComp() {
  return (
    <section className={styles.SpliterCont}>
      <img src={spliterImg} />
    </section>
  );
}

export default SpliterComp;
