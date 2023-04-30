import React from "react";
import styles from "./VideoBgSectionStyle.module.scss";
import meetusHeading from "../../Images/meetusHeading.png";
import Navbar from "../Navbar/Navbar";

function VideoBgSection() {
  return (
    <header>
      <div className={styles.headerMainDiv}>
        <div data-ux="Block" className={styles.vdieoBg}>
          <iframe
            data-ux="Embed"
            id="embed-iframe-16812"
            src="https://player.vimeo.com/video/806770401?h=58ffb56ab9&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0"
            allow="autoplay; fullscreen"
            allowFullScreen={true}
            loading="lazy"
            data-aid="HEADER_VIDEO_EMBED"
            className={styles.iframeVideo}
          ></iframe>
        </div>
        <div className={styles.headerContentDiv}>
          <h1>
            <img src={meetusHeading} alt={"meetus logo"} />
          </h1>
          <h4>Blending Real And Virtual Worlds</h4>
          <p>
            Through MeetusVr, you will be able to encounter immersive
            experiences. We allow you to go beyond just viewing digital content.
            In our metaverse, you will be able to immerse yourself in a space
            where the digital and physical worlds converge.
          </p>
          <a href="#">more details</a>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default VideoBgSection;
