import React, { Fragment } from "react";
import NowPlayingImg from "../../assets/images/Rectangle 15.png";
import { BiShuffle } from "react-icons/bi";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { HiPause } from "react-icons/hi";
import { IoRepeatOutline } from "react-icons/io5";
import VolumeSlider from "../FormElements/VolumeSlider";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = () => {
  return (
    <Fragment>
      <div className="absolute bottom-0 right-0 left-0 bg-glassBg bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="text-white flex items-center justify-around">
          <div className="">
            <img
              src={NowPlayingImg}
              alt=""
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <div className="">
            <div className="">Seasons In</div>
            <div className="">James</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="px-5 cursor-pointer">
              <BiShuffle size={30} />
            </div>
            <div className="px-5 cursor-pointer">
              <AiFillStepBackward size={30} />
            </div>
            <div className="px-5 cursor-pointer">
              <BsPlayFill size={30} />
            </div>
            {/* <div className="px-5 cursor-pointer">
              <HiPause size={30} />
            </div> */}
            <div className="px-5 cursor-pointer">
              <AiFillStepForward size={30} />
            </div>
            <div className="px-5 cursor-pointer">
              <IoRepeatOutline size={30} />
            </div>
          </div>
          <div className="flex items-center">
            <GiSpeaker size={30} />
            <VolumeSlider />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MusicPlayer;
