import React, { Fragment } from "react";
import { NavBar, SideBar } from "../components";
import RoutePaths from "./RoutePaths/RoutePaths";

const AppLayout = () => {
  return (
    <Fragment>
      <div className="flex h-screen bg-dark">
        <aside className="z-20 hidden w-[80px] overflow-y-auto md:block flex-shrink-0">
          <SideBar />
        </aside>
        <div className="flex flex-col flex-1 w-full">
          <header className="z-10 py-4shadow-md">
            <NavBar />
          </header>
          <main className="h-full overflow-y-auto">
            <RoutePaths />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default AppLayout;
