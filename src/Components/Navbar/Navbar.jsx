import React from "react";
import styles from "./NavbarStyle.module.scss";
import "./NavbarStyle.module.scss";
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
          <button className={styles.chevronDown}>
            <img src={chevronDown} alt="chevron down icon" />
          </button>
        )}
      </li>
    );
  };
  return (
    <nav className={styles.navbarCont}>
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
        <div className={styles.navbarBtn}>
          <button>connect wallet</button>
          <button>login</button>
        </div>
      </ul>
      <label className={styles.navBtn} htmlFor="navCheckBox">
        <img
          src={BurgerIcon}
          alt="burger menu icon"
          className={styles.burgerIcon}
        />
      </label>
    </nav>
  );
}

export default Navbar;
