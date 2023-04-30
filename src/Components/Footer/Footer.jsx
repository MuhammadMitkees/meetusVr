import React from "react";
import "./FooterStyle.scss";
import FooterLinkData from "../../Constants/FooterLinkData";
import meetusvrLogo2 from "../../Images/meetusvrLogo2.png";
import twitterLogo from "../../Images/twitterIcon.png";
import fbIcon from "../../Images/fbIcon.png";
import igIcon from "../../Images/igIcon.png";
import githubIcon from "../../Images/githubIcon.png";
function Footer() {
  const FooterSmLinks = (props) => {
    return <img src={props.src} alt={props.alt} />;
  };
  const UlFooterComp = (props) => {
    return (
      <ul className="ulFooterCont">
        {props.header}
        <li>
          <a href="#">{props.firstLink}</a>
        </li>
        <li>
          <a href="#">{props.secLink}</a>
        </li>
        <li>
          <a href="#">{props.thirdLink}</a>
        </li>
        <li>
          <a href="#">{props.fourthLink}</a>
        </li>
      </ul>
    );
  };
  return (
    <footer className="footerCont">
      <div className="footerMainDiv">
        <div className="meetusFooter">
          <img
            src={meetusvrLogo2}
            alt="meetusvr Logo"
            className="meetusvrLogoFooter"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
          <div className="footerSmLinks">
            <FooterSmLinks src={twitterLogo} alt="twitter icon" />
            <FooterSmLinks src={fbIcon} alt="facebook icon" />
            <FooterSmLinks src={igIcon} alt="instagram icon" />
            <FooterSmLinks src={githubIcon} alt="github icon" />
          </div>
        </div>
        <UlFooterComp
          header="Company"
          firstLink={FooterLinkData.Company.firstLink}
          secLink={FooterLinkData.Company.secLink}
          thirdLink={FooterLinkData.Company.thirdLink}
          fourthLink={FooterLinkData.Company.fourthLink}
        />
        <UlFooterComp
          header="Features"
          firstLink={FooterLinkData.Features.firstLink}
          secLink={FooterLinkData.Features.secLink}
          thirdLink={FooterLinkData.Features.thirdLink}
          fourthLink={FooterLinkData.Features.fourthLink}
        />
        <UlFooterComp
          header="Help"
          firstLink={FooterLinkData.Help.firstLink}
          secLink={FooterLinkData.Help.secLink}
          thirdLink={FooterLinkData.Help.thirdLink}
          fourthLink={FooterLinkData.Help.fourthLink}
        />
      </div>

      <p className="footerCRightTxt">
        copyright © meetUsVR 2023 all right reserved
      </p>
    </footer>
  );
}

export default Footer;
