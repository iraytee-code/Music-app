import React, { Fragment, useState } from "react";

const VolumeSlider = () => {
  const [volume, setVolume] = useState(1);
  return (
    <Fragment>
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
        onChange={(event) => {
          setVolume(event.target.valueAsNumber);
        }}
      />
    </Fragment>
  );
};

export default VolumeSlider;
