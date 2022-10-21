import React, { Fragment, useState, useRef, useEffect } from "react";
import { songsdata } from "../../data/audios";
import { Control, VolumeControl } from "../../components";
import MusicImage from "../../assets/images/Lead-image.png";
import { ImVolumeMedium } from "react-icons/im";

const MusicPlayer = () => {
  //state to keep track of the songs
  const [songs, setSongs] = useState(songsdata);
  //state to keep track of the current song
  const [isPlaying, setIsPlaying] = useState(false);
  //state to keep track of the first song in the array
  const [currentSong, setCurrentSong] = useState(songsdata[2]);

  const audioElement = useRef();

  const musicDetailsUpdate = () => {
    //get the duration and time of the current song
    const musicDuration = audioElement.current.duration;
    const musicCurrentTime = audioElement.current.currentTime;
    //update the state with the current time and duration
    setCurrentSong({
      //spread the current songs state
      ...currentSong,
      //update the duration and current time and attah a property of progress to it
      progress: (musicCurrentTime / musicDuration) * 100,
      //attach a lenght property to the music duration
      lenght: musicDuration,
    });
  };

  useEffect(() => {
    isPlaying ? audioElement?.current?.play() : audioElement?.current?.pause();
  }, [isPlaying]);
  return (
    <Fragment>
      <div className="absolute bottom-0 right-0 left-0 scrollbar-hide bg-white pt-5 backdrop-filter backdrop-blur-sm bg-opacity-10 text-white">
        <div className="flex items-center justify-around">
          <div className="flex items-center">
            <div className="w-16 h-16">
              <img
                src={MusicImage}
                alt="music_image"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="px-3">
              <p>{currentSong?.title}</p>
              <p>{currentSong.artisteName}</p>
            </div>
          </div>
          <Control
            isPlaying={isPlaying}
            currentSong={currentSong}
            songs={songs}
            setIsPlaying={setIsPlaying}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            audioElement={audioElement}
          />

          <div className="hidden md:flex items-center">
            <div className="mr-5">
              <ImVolumeMedium size={20} />
            </div>
            <div>
              {" "}
              <VolumeControl />
            </div>
          </div>
        </div>
        <div className="my-5">
          <audio
            ref={audioElement}
            src={currentSong?.url}
            onTimeUpdate={musicDetailsUpdate}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MusicPlayer;
