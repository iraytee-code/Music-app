import React, { Fragment } from "react";
import LeadImage from "../../assets/images/Lead-image.png";
import { SiApplemusic } from "react-icons/si";
import { AiFillHeart } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import image1 from "../../assets/images/Rectangle 19.png";

const Albums = () => {
  return (
    <Fragment>
      <div
        className="py-2 Album_background px-3 md:pr-3"
        style={{
          backgroundImage: `url(${LeadImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          width: "auto",
        }}
      >
        <div className="text-white  md:flex flex-row py-5 relative">
          <div className="">
            <img src={LeadImage} alt="background-img" className="rounded-2xl" />
          </div>

          <div className="md:px-5">
            <div className="font-bold text-xl md:text-2xl py-5 md:py-1 lg:py-5">
              Tomorrow’s tunes
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </div>
            <div className="py-5">64 songs ~ 16 hrs+</div>

            <div className="flex items-center justify-between py-5 md:justify-start md:pt-0 lg:pt-10">
              <div className="bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-evenly items-center px-3 py-2 rounded-full md:mx-2">
                <div>
                  <AiFillPlayCircle fill=" #FACD66" size={15} />
                </div>{" "}
                <div className="pl-2">Play all</div>
              </div>
              <div className="bg-transparentBtn flex justify-evenly items-center px-3 py-2 rounded-full md:mx-2">
                <div>
                  <SiApplemusic fill=" #FACD66" size={15} />
                </div>{" "}
                <div className="pl-2">Add to collection</div>
              </div>
              <div className="bg-transparentBtn flex justify-evenly items-center px-3 py-2 rounded-full md:mx-2 sm:w-10 h-10">
                <div>
                  <AiFillHeart fill="#E5524A" size={15} />
                </div>{" "}
                <div className="pl-2 sm:hidden">Like</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 pb-20 mb-10">
          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointer md:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>

          <div className="text-white py-3 grid grid-cols-6 bg-transparentBtn backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-lg px-2">
            <div className="flex items-center ">
              <div className=" w-[40px]">
                <img
                  src={image1}
                  alt="album_image"
                  className="rounded-lg W-[100%]"
                />
              </div>
              <div className="md:pl-2 hidden md:flex">
                <AiOutlineHeart size={20} />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center  md:flex justify-between md:items-center col-span-5 pl-2">
              <div className="self-start pb-2 md:self-center text-sm  cursor-pointer md:text-md md:pb-0 md:order-1">
                Let me love you ~ Krisx
              </div>
              <div className="justify-self-end self-start pb-2  cursor-pointermd:self-center text-sm md:text-md md:pb-0 md:order-3">
                <BsThreeDotsVertical fill=" #FACD66" />
              </div>
              <div className="self-end md:self-center text-sm  cursor-pointer pb-0 md:text-md md:order-2">
                Single
              </div>
              <div className="justify-self-end self-end  cursor-pointer md:self-center pb-0 text-sm md:text-md md:order-4">
                4:17
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Albums;
