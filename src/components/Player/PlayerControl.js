import React from "react";
import { useMediaQuery } from "react-responsive";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import classes from "./PlayerControl.module.css";

function PlayerControl(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div className={classes.play}>
      <button
        className={classes["play-button"]}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {!props.isPlaying && (
          <PlayCircleFilledIcon
            style={
              isMobile
                ? { fontSize: 160, color: "#1b1b1b" }
                : { fontSize: 80, color: "#1b1b1b" }
            }
          />
        )}
        {props.isPlaying && (
          <PauseCircleFilledIcon
            style={
              isMobile
                ? { fontSize: 160, color: "1b1b1b" }
                : { fontSize: 80, color: "#1b1b1b" }
            }
          />
        )}
      </button>
    </div>
  );
}

export default PlayerControl;
