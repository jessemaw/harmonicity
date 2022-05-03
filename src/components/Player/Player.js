import React, { useState, useEffect, useRef } from "react";
import PlayerControl from "./PlayerControl";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioElement.current.onended = () => {
      if (props.currentSongIndex + 1 > props.songs.length - 1) {
        props.setCurrentSongIndex(0);
      } else {
        props.setCurrentSongIndex(props.currentSongIndex + 1);
      }
    };
  }, [props.currentSongIndex, props]);

  return (
    <React.Fragment>
      <audio
        src={props.songs[props.currentSongIndex].src}
        ref={audioElement}
      ></audio>
      <PlayerControl isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </React.Fragment>
  );
}

export default Player;
