import React from "react";
import classes from "./MobileFooter.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";

function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footerContainer}>
      <ul className={classes.iconContainer}>
        <li className={classes.icon}>
          <a href="https://www.facebook.com/InHarmonicity">
            <FacebookIcon color="action" style={{ fontSize: 38 }} />
          </a>
        </li>
        <li>
          <a href="https://supernovas.app/u/harmonicity">
            <img className={classes.deso} src="images/deso-logo-2.svg" alt="deso-logo" />{" "}
          </a>
        </li>
        <li className={classes.icon}>
          <a href="https://www.youtube.com/channel/UCRaM_u4FhdO5q8WHIHF3n0Q/">
            <YouTubeIcon color="action" style={{ fontSize: 38 }} />{" "}
          </a>
        </li>
      </ul>
      <p className={classes.footerText}>© Harmonicity {currentYear}</p>
    </footer>
  );
}

export default MobileFooter;
