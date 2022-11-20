import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import HeadphoneImg from "../assets/images/headphoneimg.jpg";
import femaleImage from "../assets/images/Woman-listening.jpg";
import { NavBarHome } from "../components";

const AppWelcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <Fragment>
      <div className="bg-dark h-screen px-5  py-10 md:px-10 relative overflow-hidden">
        <NavBarHome />

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-col justify-bewteen  text-center lg:text-start pb-10">
            <div className="text-5xl py-3 md:py-10 md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
              <div className="text-secondary">For your</div>
              <div className="text-secondary">music</div>
            </div>
            <div className="py-10 font-semibold text-light">
              A platform for all music fans
            </div>
            <div>
              <button
                className="w-[280px] md:w-[350px]  text-dark bg-altPrimary text-center rounded-md py-5 font-bold"
                onClick={handleClick}
              >
                {" "}
                Listen Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start py-10 image_container">
            <div className=" w-[200px] md:w-[300px] lg:w-[400px] lg:-ml-60 lg:absolute">
              <img
                className="h-[100%]  w-[100%] rounded-full"
                src={HeadphoneImg}
                alt="headphone_img"
              />
            </div>

            <div className=" -ml-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] md:relative ">
              <img
                className="h-[100%]  w-[100%] rounded-full"
                src={femaleImage}
                alt="female_img"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppWelcome;
