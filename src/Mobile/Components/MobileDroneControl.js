import React from "react";
import classes from "./MobileDroneControl.module.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import { useMediaQuery } from "react-responsive";

function DronePlayerControl(props) {
  const isTablet = useMediaQuery({ query: "(min-width: 577px)" });
  return (
    <React.Fragment>
      <button
        className={classes["play-button"]}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {!props.isPlaying && (
          <PlayArrowRoundedIcon
            style={
              isTablet
                ? { fontSize: 120, color: "#49484D" }
                : { fontSize: 72, color: "#49484D" }
            }
          />
        )}
        {props.isPlaying && (
          <PauseRoundedIcon
            style={
              isTablet
                ? { fontSize: 120, color: "#49484D" }
                : { fontSize: 72, color: "#49484D" }
            }
          />
        )}
      </button>
    </React.Fragment>
  );
}

export default DronePlayerControl;
