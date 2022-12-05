import React, { Fragment, useState } from "react";
import LogoImg from "../../assets/images/logo.svg";
import SearchBar from "../FormElements/SearchBar";
import { AiOutlineBars, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { RiRadioFill, RiVideoLine } from "react-icons/ri";
import { IoPerson, IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <Fragment>
      {/* desktop Navigation Bar */}
      <div className="hidden md:block p-5">
        <SearchBar
          type={"text"}
          className={"bg-transparent focus:outline-none font-[14px]"}
          placeholder={"Search"}
        />
      </div>
      {/* mobile and tablet Navigation Bar */}
      <div className="flex items-center justify-between md:hidden p-2 ">
        <div className="items-center flex">
          <div className="cursor-pointer" onClick={() => setNav(!nav)}>
            <AiOutlineBars size={30} />
          </div>
          <div className="px-5">
            <img src={LogoImg} alt="Logo" />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer text-light/50"
          onClick={() => setNav(!nav)}
        >
          <AiOutlineSearch size={30} />
        </div>
      </div>
      {/* side menu navigation */}
      <div onClick={() => setNav(!nav)}
        className={
          nav ? "fixed top-0 left-0 h-screen w-[350px] bg-dark z-10 duration-1000 md:hidden cursor-pointer" : "fixed top-0 left-[-1000px] h-screen w-[350px] bg-white z-10 duration-1000 cursor-pointer"
        }
      >
        <ul className=" text-light/50 pt-[80px] pl-[25px]">
          <Link to ='./DashBoard'  className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400 w-[50%]">
            <span className="px-3">
              <AiOutlineHome size={30} />
            </span>
            <span className="font-bold text-[17px]">Home</span>
          </Link>
          <Link to= "./Collections" className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400 w-[60%]">
            <span className="px-3">
              <BsCollectionPlay size={30} />
            </span>
            <span className="font-bold text-[17px]">My Collections</span>
          </Link>
          <Link className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400 w-[50%]">
            <span className="px-3">
              <RiRadioFill size={30} />
            </span> 
            <span className="font-bold text-[17px]">Radio</span>
          </Link>
          <Link className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400 w-[50%]">
            <span className="px-3">
              <RiVideoLine size={30} />
            </span>
            <span className="font-bold text-[17px]">Music Videos</span>
          </Link>
          <Link className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400 w-[50%]">
            <span className="px-3">
              <IoPerson size={30} />
            </span>
            <span className="font-bold text-[17px]">Profile</span>
          </Link>
          <Link className="flex items-center py-[25px] cursor-pointer hover:text-yellow-400">
            <span className="px-3">
              <IoLogOutOutline size={30} />
            </span>
            <span className="font-bold text-[17px]">Log Out</span>
          </Link>
        </ul>
      </div>{" "}
    </Fragment>
  );
};

export default NavBar;
