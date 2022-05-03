import React, { useState } from "react";
import classes from "./DroneMobile.module.css";
import oneOne from "../../assets/Drones/drone-one-one.mp3";
import nineEight from "../../assets/Drones/drone-nine-eight.mp3";
import fiveFour from "../../assets/Drones/drone-five-four.mp3";
import elevenEight from "../../assets/Drones/drone-eleven-eight.mp3";
import threeTwo from "../../assets/Drones/drone-three-two.mp3";
import thirteenEight from "../../assets/Drones/drone-thirteen-eight.mp3";
import sevenFour from "../../assets/Drones/drone-seven-four.mp3";
import fifteenEight from "../../assets/Drones/drone-fifteen-eight.mp3";
import MobileSlider from "../Components/MobileSlider";
import MobileDroneControl from "../Components/MobileDroneControl";

function DroneMobile() {
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
    <div className={classes.container}>
      <h1 className={classes.header}>DRONE</h1>
      <div className={classes.play}>
        <MobileDroneControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
      <div className={classes.drone}>
        <MobileSlider tracks={drones} playTrack={isPlaying} index="0" />
        <MobileSlider tracks={drones} playTrack={isPlaying} index="3" />
        <MobileSlider tracks={drones} playTrack={isPlaying} index="5" />
        <MobileSlider tracks={drones} playTrack={isPlaying} index="6" />
      </div>
    </div>
  );
}

export default DroneMobile;
