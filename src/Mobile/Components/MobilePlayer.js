import React, { useState } from "react";
import classes from "./MobilePlayer.module.css";
import PlayerBackdrop from "../../assets/images/player-backdrop.png";
import PlayerControl from "../../components/Player/PlayerControl";
import ReactHowler from "react-howler";
import Syntonic from "../../assets/Songs/syntonic.mp3";
import Elemental from "../../assets/Songs/its-all-elemental.mp3";
import PersianGlances from "../../assets/Songs/persian-glances-030518-mastered.mp3";
import Threads from "../../assets/Songs/to-threads.mp3";

function MobilePlayer() {
  const [songs] = useState([
    { src: PersianGlances },
    { src: Syntonic },
    { src: Elemental },
    { src: Threads },
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  // Loops through playlist

  function stopHandler() {
    if (currentSongIndex + 1 > songs.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(currentSongIndex + 1);
    }
  }

  return (
    <section className={classes.player}>
      <ReactHowler
        src={songs[currentSongIndex].src}
        playing={isPlaying}
        onEnd={stopHandler}
      />
      <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <img className={classes.backdrop} src={PlayerBackdrop} alt="circle art" />
    </section>
  );
}

export default MobilePlayer;
