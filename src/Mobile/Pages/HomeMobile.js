import React, { useState } from "react";
import classes from "./HomeMobile.module.css";
import HamburgerIcon from "../Components/HamurgerIcon";
import CloseIcon from "@mui/icons-material/Close";
import MobileNavbar from "../Components/MobileNavbar";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function HomeMobile() {
  const [isClicked, setIsClicked] = useState(false);
  const isTablet = useMediaQuery({ query: "(min-width: 577px)" });

  function toggleMenuHandler() {
    setIsClicked(!isClicked);
  }
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>
          <Link to="/">HARMONICITY</Link>
        </h1>
      </header>
      <span className={classes.hamburger}>
        <HamburgerIcon change={isClicked} onClick={toggleMenuHandler} />
        <button
          type="button"
          className={` ${classes.close} ${isClicked ? classes.change : null}`}
          onClick={toggleMenuHandler}
        >
          <CloseIcon
            style={
              isTablet
                ? { fontSize: 80, color: "#49484D" }
                : { fontSize: 56, color: "#49484D" }
            }
          />
        </button>
      </span>
      <MobileNavbar active={isClicked} onClose={toggleMenuHandler} />
    </div>
  );
}

export default HomeMobile;
