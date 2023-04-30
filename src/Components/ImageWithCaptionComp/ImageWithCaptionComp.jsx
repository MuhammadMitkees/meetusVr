import React from "react";
import "./ImageWithCaptionStyle.scss";
import arrowRight from "../../Images/arrowRight.png";
function ImageWithCaptionComp(props) {
  return (
    <section className="imgWithCapCont">
      <div className="singleRowImgCap">
        <div className="imgWithCapCap">
          <h4>{props.title1}</h4>
          <p>{props.desc1}</p>
          <a href="#">
            Get more details
            <img src={arrowRight} alt="arrow Right" />
          </a>
        </div>
        <img src={props.imgOneSrc} />
      </div>
      <div className="singleRowImgCap">
        <img src={props.imgTwoSrc} />
        <div className="imgWithCapCap">
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
