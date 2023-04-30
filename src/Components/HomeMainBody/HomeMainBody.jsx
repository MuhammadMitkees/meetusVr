import React from "react";
import styles from "./HomeMainBodyStyle.module.scss";
import EmpowerComponent from "../EmpowerComponent/EmpowerComponent";
import SpliterComp from "../SpliterComp/SpliterComp";
import WeOfferComp from "../WeOfferComp/WeOfferComp";
import ImageWithCaptionComp from "../ImageWithCaptionComp/ImageWithCaptionComp";
import ImgWithCapData from "../../Constants/ImgWithCapData";
import WeTakeComp from "../WeTakeComp/WeTakeComp";
function HomeMainBody() {
  return (
    <div className={styles.homeMainBodyCont}>
      <EmpowerComponent />
      <SpliterComp />
      <WeOfferComp />
      <SpliterComp />
      {ImgWithCapData.map((item) => {
        return (
          <ImageWithCaptionComp
            title1={item.title1}
            title2={item.title2}
            desc1={item.desc1}
            desc2={item.desc2}
            imgOneSrc={item.imgOneSrc}
            imgTwoSrc={item.imgTwoSrc}
          />
        );
      })}
      <SpliterComp />
      <WeTakeComp />
    </div>
  );
}

export default HomeMainBody;
