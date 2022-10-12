import React, { Fragment } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const FavouriteCard = ({ imageName, songTitle, artisteName, duration }) => {
  return (
    <Fragment>
      <div className=" bg-[#1A1E1F] rounded-xl p-3 w-[300px] h-[233px] md:w-[100%] md:h-auto">
        <div className="flex justify-between items-start">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div>
              <img src={imageName} alt="" className="md:w-[63px] md:h-[63px]" />
            </div>
            <div className="text-[#FFFFFF] lg:pl-3">
              <div className=" lg:pt-0">{songTitle}</div>
              <div className="text-sm">{artisteName}</div>
              <div className=" text-sm">{duration}</div>
            </div>
          </div>
          <div className="rounded-full border-[1px] text-white w-9 h-9 flex justify-center items-center">
            <div className="">
              <AiOutlineHeart />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FavouriteCard;
