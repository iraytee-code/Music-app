import React, { Fragment } from "react";
import {
  ChartsCard,
  HitsCard,
  NewRelease,
  PopularRelease,
} from "../../components";
import NowPlayingImg from "../../assets/images/Rectangle 15.png";

const DashBoard = () => {
  return (
    <Fragment>
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-10 grid-rows-1 gap-1 md:gap-10 px-5 font-quickSand my-2 md:m-4 scrollbar-hide">
        <HitsCard />
        <ChartsCard />
      </div>
      <NewRelease />
      <PopularRelease />
      <div className="absolute bottom-0 right-0 left-0 bg-glassBg bg-opacity-60 backdrop-filter backdrop-blur-lg ">
        <div className="">
          <div className="">
            <img src={NowPlayingImg} alt="" />
          </div>
          <div className="">
            <div className="">Seasons In</div>
            <div className="">James</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashBoard;
