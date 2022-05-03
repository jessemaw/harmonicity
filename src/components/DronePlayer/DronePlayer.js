import React, { useEffect, useRef } from "react";

function DronePlayer(props) {
  const audioElement = useRef(null);

  useEffect(() => {
    if (props.playTrack) {
      audioElement.current.play();
      audioElement.current.volume = props.value;
    } else {
      audioElement.current.pause();
    }
  }, [props]);

  return (
    <React.Fragment>
      <audio
        loop
        src={props.tracks[props.index].src}
        ref={audioElement}
        type="audio/mpeg"
      ></audio>
    </React.Fragment>
  );
}

export default DronePlayer;
