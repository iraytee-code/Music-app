import React, { Fragment } from "react";
import { SideBar } from "../components";
import RoutePaths from "./RoutePaths/RoutePaths";

const AppLayout = () => {
  return (
    <Fragment>
      <SideBar />
      <RoutePaths />
    </Fragment>
  );
};

export default AppLayout;
