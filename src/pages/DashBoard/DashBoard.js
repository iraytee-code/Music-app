import React, { Fragment } from "react";
import {
  ChartsCard,
  HitsCard,
  NewRelease,
  PopularRelease,
  MusicPlayer,
} from "../../components";

const DashBoard = () => {
  return (
    <Fragment>
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-10 grid-rows-1 gap-1 md:gap-10 px-5 font-quickSand my-2 md:m-4 scrollbar-hide">
        <HitsCard />
        <ChartsCard />
      </div>
      <div className="mb-20 pb-6">
        <NewRelease />
        <PopularRelease />
      </div>
      <MusicPlayer />
    </Fragment>
  );
};

export default DashBoard;
