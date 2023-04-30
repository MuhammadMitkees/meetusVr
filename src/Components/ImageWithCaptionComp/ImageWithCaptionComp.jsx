import React from "react";
import styles from "./ImageWithCaptionStyle.module.scss";
import arrowRight from "../../Images/arrowRight.png";
function ImageWithCaptionComp(props) {
  return (
    <section className={styles.imgWithCapCont}>
      <div className={styles.singleRowImgCap}>
        <div className={styles.imgWithCapCap}>
          <h4>{props.title1}</h4>
          <p>{props.desc1}</p>
          <a href="#">
            Get more details
            <img src={arrowRight} alt="arrow Right" />
          </a>
        </div>
        <img src={props.imgOneSrc} />
      </div>
      <div className={styles.singleRowImgCap}>
        <img src={props.imgTwoSrc} />
        <div className={styles.imgWithCapCap}>
          <h4>{props.title2}</h4>
          <p>{props.desc2}</p>
          <a href="#">
            Get more details
            <img src={arrowRight} alt="arrow Right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageWithCaptionComp;
