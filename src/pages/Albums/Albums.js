import React, { Fragment } from "react";
import LeadImage from "../../assets/images/Lead-image.png";
import {SiApplemusic} from "react-icons/si";
import {AiFillHeart} from "react-icons/ai";
import {AiFillPlayCircle} from "react-icons/ai";

const Albums = () => {
  return (
    <Fragment>
      <div className="">
        <div className="text-white  md:flex flex-row">

       <div className="">
<img src={LeadImage} alt='background-img' className="rounded-2xl" />
       </div>

       <div className="md:px-5">
        <div className="font-bold text-xl md:text-2xl py-5">Tomorrow’s tunes</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
        <div className="py-5">64 songs ~ 16 hrs+</div>

        <div className="flex items-center justify-between  md:justify-start pt-10">
        <div className="bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-evenly items-center px-4 py-2 rounded-full md:mx-2"><div><AiFillPlayCircle fill=" #FACD66" size={15}/></div> <div className="pl-2">Play all</div></div>
        <div className="bg-transparentBtn flex justify-evenly items-center px-4 py-2 rounded-full md:mx-2"><div><SiApplemusic fill=" #FACD66" size={15}/></div> <div className="pl-2">Add to collection</div></div>
        <div className="bg-transparentBtn flex justify-evenly items-center px-4 py-2 rounded-full md:mx-2 sm:w-10 h-10"><div><AiFillHeart fill="#E5524A" size={15}/></div> <div className="pl-2 sm:hidden">Like</div></div>
        </div>

       </div>

       <div></div>
          </div>

          {/* <div className="text-white">
            <div>gr9gpnoewnoigniowe</div>
            <div>enwofnogrngiwen</div>
            <div>gejnwinfiwnfiei</div>
            <div>egnioweniiwogjwojo</div>
          </div> */}
      </div>
    </Fragment>
  );
};

export default Albums;
