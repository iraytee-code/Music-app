import React, { Fragment } from "react";

const MusicCard = ({ musicImage, altMusicImage }) => {
  return (
    <Fragment>
      <img
        src={musicImage}
        className="rounded-xl cursor-pointer  hover:animate-pulse"
        alt={altMusicImage}
      />
    </Fragment>
  );
};

export default MusicCard;
