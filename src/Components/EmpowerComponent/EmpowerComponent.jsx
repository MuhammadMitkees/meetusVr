import React from "react";
import styles from "./EmpowerComponentStyle.module.scss";
import empowerImg from "../../Images/empowerImg.png";
function EmpowerComponent() {
  return (
    <section className={styles.empowerCont}>
      <h2>Empower your future with us </h2>
      <p>
        MeetusVR is an innovative way to help businesses reach their goals. The
        innovative and exciting platform features new technology that provides
        endless opportunities for professionals in different industries.
      </p>
      <img src={empowerImg} alt="" />
    </section>
  );
}

export default EmpowerComponent;
