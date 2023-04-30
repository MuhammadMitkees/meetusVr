import React from "react";
import "./WeTakeStyle.scss";
import meetUsLogo from "../../Images/meetUsLogo.png";
import logo1 from "../../Images/logo1.png";
function WeTakeComp() {
  return (
    <section className="weTakeCont">
      <h2>We TAKe E-commerce TO A NEW LEVEL</h2>
      <p>
        .MeetusVR is A NEW REVOLUTIONARY PLATFORM serves customers who have a
        website or don’t have in the world of E-commerce to achieve new success
        together.
      </p>
      <img src={meetUsLogo} alt="meet us logo" className="meetUsLogo" />
      <img src={logo1} alt="meetusvr logo" className="meetUsvrLogo" />
    </section>
  );
}

export default WeTakeComp;
