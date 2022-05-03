import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MobileNavbar.module.css";

function MobileNavbar(props) {
  return (
    <ul
      className={` ${classes.container} ${
        props.active ? classes.active : null
      }`}
    >
      <li className={classes.navText}>
        <NavLink to="/about" onClick={props.onClose}>
          ABOUT
        </NavLink>
      </li>
      <div className={classes.spacer}></div>
      <li className={classes.navText}>
        <NavLink to="/theory" onClick={props.onClose}>
          THEORY
        </NavLink>
      </li>
      <div className={classes.spacer}></div>
      <li className={classes.navText}>
        <NavLink to="/drone" onClick={props.onClose}>
          DRONE
        </NavLink>
      </li>
      <div className={classes.spacer}></div>
      <li className={classes.navText}>
        <NavLink to="/nft" onClick={props.onClose}>
          NFTs
        </NavLink>
      </li>
      <div className={classes.spacer}></div>
      <li className={classes.navText}>
        <NavLink to="/contact" onClick={props.onClose}>
          CONTACT
        </NavLink>
      </li>
    </ul>
  );
}

export default MobileNavbar;
