import React from "react";
import "./HomeStyle.scss";
import VideoBgSection from "../../Components/VideoBgSection/VideoBgSection";
import HomeMainBody from "../../Components/HomeMainBody/HomeMainBody";
import LearnComp from "../../Components/LearnComp/LearnComp";
import Footer from "../../Components/Footer/Footer";
function Home() {
  return (
    <div>
      <VideoBgSection />
      <HomeMainBody />
      <LearnComp />
      <Footer />
    </div>
  );
}

export default Home;
