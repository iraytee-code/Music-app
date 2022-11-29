import React, { Fragment } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { RiRadioFill, RiVideoLine } from "react-icons/ri";
import { IoPerson, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
// import { Collections } from "../../pages/Collections/";

const SideBar = () => {
  return (
    <Fragment>
      <div className="py-4 px-5">
        <div className="">
          <img src={LogoImg} alt="Logo" />
        </div>
        <ul className="mt-6">
          <div className="bg-[#000000]/30 text-[#EFEEE0]/50 text-center px-3 rounded-[20px] mb-5 mt-4">
            <Link className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <AiOutlineHome size={30} />
            </Link>
            <Link to ="./Collections" className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <BsCollectionPlay size={30} />
            </Link>
            <Link className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <RiRadioFill size={30} />
            </Link>
            <Link className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <RiVideoLine size={30} />
            </Link>
          </div>
          <div className="bg-[#000000]/30 text-[#EFEEE0]/50 text-center px-3 rounded-[20px] mb-5 mt-4">
            <Link className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <IoPerson size={30} />
            </Link>
            <Link className="flex items-center py-[15px] cursor-pointer hover:text-yellow-400">
              <IoLogOutOutline size={30} />
            </Link>
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default SideBar;
