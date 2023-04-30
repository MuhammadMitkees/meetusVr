import React from "react";
import "./NavbarStyle.scss";
import logoNav from "../../Images/logoNav.png";
import NavBarLinks from "../../Constants/NavBarLinks";
import chevronDown from "../../Images/chevronDown.png";
import BurgerIcon from "../../Images/burgerIcon.png";
function Navbar() {
  const NavBarLink = (props) => {
    return (
      <li className="singleNavLink">
        <a href="#">{props.title}</a>
        {props.haveDropdown && (
          <button>
            <img
              src={chevronDown}
              alt="chevron down icon"
              className="chevronDown"
            />
          </button>
        )}
      </li>
    );
  };
  return (
    <nav className="navbarCont">
      <input type="checkbox" id="navCheckBox" />
      <img src={logoNav} alt="meetusvr logo" />
      <ul>
        {NavBarLinks.map((item, key) => {
          return (
            <NavBarLink
              title={item.title}
              key={key}
              haveDropdown={item.haveDropdown}
            />
          );
        })}
        <div className="navbarBtn">
          <button>connect wallet</button>
          <button>login</button>
        </div>
      </ul>
      <label className="navBtn" htmlFor="navCheckBox">
        <img src={BurgerIcon} alt="burger menu icon" className="burgerIcon" />
      </label>
    </nav>
  );
}

export default Navbar;
