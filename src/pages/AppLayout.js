import React, { Fragment } from "react";
import { NavBar, SideBar } from "../components";
import RoutePaths from "./RoutePaths/RoutePaths";

const AppLayout = () => {
  return (
    <Fragment>
      <div className="bg-dark min-h-screen font-quickSand">
        {/* Navigation Bar */}
        <NavBar />
        {/* Navigation Bar */}
        <div className="hidden md:block">
          <SideBar />
        </div>
        <RoutePaths />
      </div>
    </Fragment>
  );
};

export default AppLayout;
