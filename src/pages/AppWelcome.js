import React, {Fragment, useState} from "react";
import { useNavigate } from "react-router-dom";
import Applogo from "../assets/images/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import HeadphoneImg from "../assets/images/headphoneimg.jpg";
import femaleImage from "../assets/images/Woman-listening.jpg";
import {MdOutlineCancel} from "react-icons/md";



const AppWelcome = () => {

const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
<Fragment>
<div className="bg-dark h-screen px-5  py-10 md:px-10 relative ">
<div className=" flex md:flex justify-between items-center py-2">
      <div className="flex items-center">
        <div>
          <img alt="app-logo" src={Applogo} />
        </div>
        <div className="text-secondary font-bold">Musica</div>
      </div>
      <div>
        <div className=" text-light flex md:hidden" onClick={()=>{setOpen(!open)}}>
          <div className='hamburger_btn'><GiHamburgerMenu size={25} /></div>
        </div>
        <div className="hidden flex-col md:flex-row justify-between md:flex">
        <button className="bg-secondary rounded-full px-4 py-2 flex items-center align-center font-bold text-sm md:text-md  mx-3">
            Support
          </button>

          <button className="bg-green-500 rounded-full px-4 py-2 flex items-center align-center font-bold text-sm md:text-md mx-3">
            Subscription
          </button>
          <button className="bg-altPrimary rounded-full px-4 py-2 flex items-center align-center font-bold text-sm md:text-md mx-3">
            <div onClick={handleClick}>Listen</div>
          </button>
        </div>
      </div>  
    </div>
    

<div className={`dropdown-menu ${open? 'active' : 'inactive'} `}>
<div className=" h-5/6 w-fit px-20 flex flex-col justify-evenly md:hidden backdrop-blur-md absolute">
        <button className="bg-secondary rounded-full px-4 py-2  mb-5 align-center font-bold text-sm md:text-md ">
            Support
          </button>

          <button className="bg-green-500 rounded-full px-4 py-2 flex items-center mb-5 align-center font-bold text-sm md:text-md ">
            Subscription
          </button>
          <button className="bg-altPrimary rounded-full px-4 py-2  font-bold text-sm md:text-md ">
            <div onClick={handleClick}>Listen</div>
          </button>
        
          <button className="w-[60px] h-[60px] rounded-full mx-auto flex justify-center items-center" onClick={()=>{setOpen(!open)}}>
            <MdOutlineCancel className="text-red-200" size={45}/></button>

        </div>
</div>

   <div className="flex flex-col lg:flex-row justify-between">
   <div className="flex-col justify-bewteen  text-center lg:text-start pb-10">
<div className="text-5xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
  <div className="text-secondary">For your</div>
  <div className="text-secondary">music</div>
</div>
<div className="py-10 font-semibold text-light">A platform for all music fans</div>
<div><button  className="w-[280px] md:w-[350px]  text-dark bg-altPrimary text-center rounded-md py-5 font-bold" onClick={handleClick}> Listen Now</button></div>
    </div>

<div className="flex items-center justify-center lg:justify-start py-10 image_container">
<div className=" w-[200px] md:w-[300px] lg:w-[400px] lg:-ml-60 lg:absolute">
      <img className="h-[100%]  w-[100%] rounded-full" src={HeadphoneImg} alt="headphone_img"/>
    </div>
 
    <div className=" -ml-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] md:relative ">
      <img className="h-[100%]  w-[100%] rounded-full" src={femaleImage} alt="female_img"/>
    </div>
</div>

   </div>
</div>
</Fragment>
  );
};

export default AppWelcome;
