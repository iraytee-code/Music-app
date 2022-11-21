import React, { Fragment } from "react";
import { NavBarHome } from "../components";
import {AppHome} from  "../components";

const AppWelcome = () => {


  return (
    <Fragment>
      <div className="bg-dark h-screen px-5  py-10 md:px-10 relative overflow-hidden">
        <NavBarHome />
       <AppHome/>
     
      </div>
    </Fragment>
  );
};

export default AppWelcome;
