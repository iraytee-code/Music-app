import React, { Fragment } from "react";
import Goldenage_img from "../../assets/images/GoldenAge.png";
import MusicImageTwo from "../../assets/images/MusicImageTwo.png";
import { FavouriteCard } from "../../components";
import { Link } from "react-router-dom";
// import { Collections } from "../../pages/Collections/Collections";
const ChartsCard = () => {
  return (
    <Fragment>
      <div className=" md:col-span-4 md:mt-1 rounded-lg overflow-hidden py-10 md:py-0">
        <div className="font-bold text-white text-[24px] py-2 md:pt-0">
          Top charts
        </div>
        <div className=" grid grid-cols-3 overflow-x-auto  md:grid-cols-1 md:gap-3 md:mt-5">
          <Link to="/albums" className="m-0 ">
            <FavouriteCard
              imageName={Goldenage_img}
              songTitle={"Golden age of 80s"}
              artisteName={"Sean Swadler"}
              duration={"2:34:45"}
            />
          </Link>
          <Link to="/albums" className="ml-[200px] md:m-0">
            <FavouriteCard
              imageName={MusicImageTwo}
              songTitle={"Reggae “n” blues"}
              artisteName={"Dj YK mule"}
              duration={"1:02:42"}
            />
          </Link>
          <Link to="/albums" className="ml-[400px] md:m-0">
            <FavouriteCard
              imageName={Goldenage_img}
              songTitle={"Tomorrow’s tunes"}
              artisteName={"Obi Datti"}
              duration={"2:01:25"}
            />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ChartsCard;
