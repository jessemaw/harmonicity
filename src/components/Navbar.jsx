import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Player from "./Player/Player";
import PersianGlances from "../assets/Songs/persian-glances-030518-mastered.mp3";
import Syntonic from "../assets/Songs/syntonic.mp3";
import Elemental from "../assets/Songs/its-all-elemental.mp3";
import Threads from "../assets/Songs/to-threads.mp3";

function Navbar() {
  const [songs] = useState([
    { src: PersianGlances },
    { src: Syntonic },
    { src: Elemental },
    { src: Threads },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [colorHighlight, setColorHighlight] = useState(false);
  const [desoHighlight, setDesoHighlight] = useState(false);
  const [youtubeHighlight, setYoutubeHighlight] = useState(false);

  function handleMouse() {
    setColorHighlight(true);
  }

  function mouseLeave() {
    setColorHighlight(false);
  }

  function desoEnter() {
    setDesoHighlight(true);
  }

  function youtubeEnter() {
    setYoutubeHighlight(true);
  }

  function youtubeLeave() {
    setYoutubeHighlight(false);
  }

  return (
    <div className={classes.container}>
      <div className={classes.navBar}>
        <ul className={classes.leftList}>
          <li className={classes.leftList}>
            <NavLink
              to="/theory"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              THEORY
            </NavLink>
          </li>

          <li className={classes.leftList}>
            <NavLink
              to="/nft"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              NFTs
            </NavLink>
          </li>
        </ul>
        <div className={classes.guitar}>
          <div className={classes.menu} />
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={songs}
          />
        </div>
        <ul className={classes.rightList}>
          <li className={classes.rightList}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className={classes.rightList}>
            <NavLink
              to="/drone"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              DRONE
            </NavLink>
          </li>

          <li className={classes.rightList}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className={classes["social-icons"]}>
        <li
          className={classes.icon}
          onMouseEnter={handleMouse}
          onMouseLeave={mouseLeave}
        >
          <a href="https://www.facebook.com/InHarmonicity">
            <FacebookIcon
              color={colorHighlight ? "primary" : "action"}
              style={{ fontSize: 30, "&:hover": { color: "disabled" } }}
            />
          </a>
        </li>
        <li
          className={classes.icon}
          onMouseEnter={desoEnter}
          onMouseLeave={mouseLeave}
        >
          <a href="https://supernovas.app/u/harmonicity">
            <img className={classes.deso} src="images/deso-logo-2.svg" alt="deso-logo" />{" "}
          </a>
        </li>
        <li
          className={classes.icon}
          onMouseEnter={youtubeEnter}
          onMouseLeave={youtubeLeave}
        >
          <a href="https://www.youtube.com/channel/UCRaM_u4FhdO5q8WHIHF3n0Q/">
            <YouTubeIcon
              color={youtubeHighlight ? "secondary" : "action"}
              style={{ fontSize: 30 }}
            />{" "}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
