import React, { Fragment, useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";

const Control = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  audioElement,
  setCurrentSong,
  songs,
}) => {
  //seek progress bar ref
  const seekRef = useRef();
  //play or pause functionality
  const playOrPause = () => {
    //isplaying is being toggled based on state changes
    setIsPlaying(!isPlaying);
  };

  const checkMusicWidth = (e) => {
    // run the seek function to update the progress bar
    let barWidth = seekRef.current.clientWidth;
    const seek = (e.nativeEvent.offsetX / barWidth) * 100;
    audioElement.current.currentTime = (seek / 100) * currentSong.lenght;
  };

  const prevMusic = () => {
    //play the previous music
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElement.current.currentTime = 0;
  };

  const nextMusic = () => {
    //play the next music
    const index = songs.findIndex((x) => x.title === currentSong.title);
    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElement.current.currentTime = 0;
  };
  return (
    <Fragment>
      <div className="">
        <div className="flex items-center justify-around my-2">
          <BiShuffle size={30} className="hidden lg:flex" />
          <BsFillSkipStartCircleFill
            size={30}
            className="cursor-pointer px-1 hidden md:flex"
            onClick={prevMusic}
          />
          {
            //render the play and pause button conditionally based o the isplaying state
            isPlaying ? (
              <BsFillPauseCircleFill
                size={30}
                className="cursor-pointer px-1 text-[#FACD66]"
                onClick={playOrPause}
              />
            ) : (
              <BsFillPlayCircleFill
                size={30}
                className="cursor-pointer px-1 text-[#FACD66]"
                onClick={playOrPause}
              />
            )
          }
          <BsFillSkipEndCircleFill
            size={30}
            className="cursor-pointer px-1 ml-3"
            onClick={nextMusic}
          />
          <FiRepeat size={30} className="hidden lg:flex" />
        </div>
        <div className="min-w-[100%] w-[40vw] lg:w-[50vw] mt-10 hidden md:flex">
          <div
            className="bg-slate-700 h-2 rounded-md cursor-pointer w-full "
            onClick={checkMusicWidth}
            ref={seekRef}
          >
            <div
              className="h-full bg-yellow-500 rounded-md"
              style={{ width: `${currentSong.progress + "%"}` }}
            ></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Control;
