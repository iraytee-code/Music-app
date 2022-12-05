import React, { Fragment, useState } from "react";
import Applogo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

const NavBarHome = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <Fragment>
      <div className=" flex md:flex justify-between items-center py-2">
        <div className="flex items-center">
          <div>
            <img alt="app-logo" src={Applogo} />
          </div>
          <div className="text-secondary font-bold">Musica</div>
        </div>
        <div>
          <div
            className=" text-light flex md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="hamburger_btn">
              <GiHamburgerMenu size={25} />
            </div>
          </div>
          <div className="hidden flex-col md:flex-row justify-between md:flex">
            <button className="text-white hover:underline hover:text-altPrimary px-4 py-2 flex items-center align-center font-bold text-sm md:text-md  mx-3">
              Support
            </button>

            <button className=" text-white  hover:underline hover:text-altPrimary rounded-full px-4 py-2 flex items-center align-center font-bold text-sm md:text-md mx-3">
              Subscription
            </button>
            <button className="text-white hover:underline hover:text-altPrimary px-4 py-2 flex items-center align-center font-bold text-sm md:text-md mx-3">
              <div onClick={handleClick}>Listen</div>
            </button>
          </div>
        </div>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}  `}>
        <div className=" h-[100vh] w-fit px-20 flex flex-col justify-evenly md:hidden backdrop-blur-md  absolute">
          <button className=" text-white hover:underline hover:text-altPrimary px-4 py-2  mb-5 align-center font-bold text-sm md:text-md ">
            Support
          </button>

          <button className="text-white hover:underline hover:text-altPrimary px-4 py-2 flex items-center mb-5 align-center font-bold text-sm md:text-md ">
            Subscription
          </button>
          <button className="text-white hover:underline hover:text-altPrimary px-4 py-2  font-bold text-sm md:text-md ">
            <div onClick={handleClick}>Listen</div>
          </button>

          <button
            className="w-[60px] h-[60px] rounded-full mx-auto flex justify-center items-center"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdOutlineCancel className="text-red-200" size={45} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default NavBarHome;
