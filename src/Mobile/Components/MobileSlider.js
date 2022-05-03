import React, { useState } from "react";
import ReactSlider from "react-slider";
import ReactHowler from "react-howler";

function MobileSlider(props) {
  const [value, setValue] = useState(0);

  function handleChange(value) {
    setValue(value / 100);
  }
  return (
    <React.Fragment>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="horizontal-thumb"
        trackClassName="horizontal-track"
        orientation="horizontal"
        min={0}
        max={100}
        defaultValue={value}
        onChange={handleChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      ></ReactSlider>
      <ReactHowler
        src={[props.tracks[props.index].src]}
        playing={props.playTrack}
        volume={value}
        loop={true}
        preload={true}
      />
    </React.Fragment>
  );
}

export default MobileSlider;
