import React, { useState } from "react";
import ReactSlider from "react-slider";
import DronePlayer from "./DronePlayer/DronePlayer";

function Slider(props) {
  const [value, setValue] = useState(0);

  function handleChange(value) {
    setValue(value / 100);
  }

  return (
    <React.Fragment>
        <ReactSlider
          className="vertical-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          orientation="vertical"
          min={0}
          max={100}
          defaultValue={value}
          onChange={handleChange}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          invert
        ></ReactSlider>
      <DronePlayer
        tracks={props.drones}
        value={value}
        index={props.droneIndex}
        playTrack={props.isPlaying}
      />
    </React.Fragment>
  );
}

export default Slider;
