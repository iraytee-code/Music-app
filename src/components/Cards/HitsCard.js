import React, { Fragment } from "react";
import BannerImg from "../../assets/images/PexelsPhotobyEricEsma.png";
import EllipseOne from "../../assets/images/Ellipse1.jpg";
import EllipseTwo from "../../assets/images/Ellipse2.jpg";
import EllipseThree from "../../assets/images/Ellipse3.jpg";
import EllipseFour from "../../assets/images/Ellipse4.jpg";
import EllipseFive from "../../assets/images/Ellipse5.jpg";
import BgVector from "../../assets/images/Vector.svg";
import { AiFillHeart } from "react-icons/ai";

const HitsCard = () => {
  return (
    <Fragment>
      <div className="p-2 md:p-4 rounded-[30px] md:rounded-[40px] relative col-span-1 md:col-span-6 cursor-pointer bg-playlistBg hover:bg-gradient-to-tr from-playlistBg to-yellow-500">
        <div className="p-6">
          <div className="md:pt-[16px] md:text-[16px] text-white">
            Currated playlist
          </div>
          <div className="text-[35px] text-white py-3">R & B Hits</div>
          <div className="text-[14px] text-white/70 py-3">
            <div className="">All mine, Lie again, Petty call me everyday,</div>
            <div className="">Out of time, No love, Bad habit,</div>
            <div className="">and so much more</div>
          </div>
          <div className="flex items-center pt-8 mb-4">
            <div class="flex -space-x-4">
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src={EllipseOne}
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src={EllipseFour}
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src={EllipseTwo}
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src={EllipseFive}
                alt=""
              />
              <img
                className="w-10 h-10 rounded-full cursor-pointer "
                src={EllipseThree}
                alt=""
              />
            </div>
            <div className="flex items-center px-5 text-white">
              <span className="">
                <AiFillHeart size={30} />
              </span>
              <span className="px-2">33 Likes</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 right-0">
          <img src={BannerImg} alt="" className="hidden md:block" />
        </div>
        <div className="absolute  bottom-0 right-0 mix-blend-overlay animate-ping">
          <img src={BgVector} alt="" className="" />
        </div>
      </div>
    </Fragment>
  );
};

export default HitsCard;
