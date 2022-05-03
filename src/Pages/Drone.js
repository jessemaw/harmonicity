import React, { useState } from "react";
import classes from "./Drone.module.css";
import ContentCard from "../UI/ContentCard";
import Slider from "../components/Slider";
import oneOne from "../assets/Drones/drone-one-one.mp3";
import nineEight from "../assets/Drones/drone-nine-eight.mp3";
import fiveFour from "../assets/Drones/drone-five-four.mp3";
import elevenEight from "../assets/Drones/drone-eleven-eight.mp3";
import threeTwo from "../assets/Drones/drone-three-two.mp3";
import thirteenEight from "../assets/Drones/drone-thirteen-eight.mp3";
import sevenFour from "../assets/Drones/drone-seven-four.mp3";
import fifteenEight from "../assets/Drones/drone-fifteen-eight.mp3";
import DronePlayerControl from "../components/DronePlayer/DronePlayerControl";

function Drone() {
  const [drones] = useState([
    { src: oneOne },
    { src: nineEight },
    { src: fiveFour },
    { src: elevenEight },
    { src: threeTwo },
    { src: thirteenEight },
    { src: sevenFour },
    { src: fifteenEight },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ContentCard className={classes["drone-container"]}>
      <div className={classes.droneHeader}>
        <h1 className={classes.droneWord}>DRONE</h1>
      </div>
      <div className={classes.play}>
        <DronePlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
      <div className={classes.drone}>
        <Slider drones={drones} droneIndex="0" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="1" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="2" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="3" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="4" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="5" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="6" isPlaying={isPlaying} />
        <Slider drones={drones} droneIndex="7" isPlaying={isPlaying} />
      </div>
    </ContentCard>
  );
}

export default Drone;
