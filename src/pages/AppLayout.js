import React, { Fragment } from "react";
import { NavBar, SideBar, MusicPlayer } from "../components";
import RoutePaths from "./RoutePaths/RoutePaths";

const AppLayout = () => {
  return (
    <Fragment>
      <div className="flex h-screen bg-dark  w-screen min-h-screen">
        <aside className="z-20 hidden w-[80px] overflow-y-auto md:block flex-shrink-0 ">
          <SideBar />
        </aside>
        <div className="flex flex-col flex-1 w-full overflow-hidden">
          <header className="z-10 py-4 shadow-md">
            <NavBar />
          </header>
          <main className="h-full overflow-y-auto scrollbar-hide">
            <RoutePaths />
          </main>
        </div>
      </div>
      <MusicPlayer />
    </Fragment>
  );
};

export default AppLayout;
