import React from "react";
import classes from "./DronePlayerControl.module.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

function DronePlayerControl(props) {
  return (
    <React.Fragment>
      <button
        className={classes["play-button"]}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {!props.isPlaying && (
          <PlayArrowRoundedIcon style={{ fontSize: 64, color: "#1b1b1b" }} />
        )}
        {props.isPlaying && (
          <PauseRoundedIcon style={{ fontSize: 64, color: "#1b1b1b" }} />
        )}
      </button>
    </React.Fragment>
  );
}

export default DronePlayerControl;
