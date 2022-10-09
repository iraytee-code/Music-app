import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AppWelcome from "./AppWelcome";
import AppRoute from "../routing/AppRoute";
import AppLayout from "./AppLayout";

const AppContent = () => {
  return (
    <Fragment>
      <div className="font-Dm-Sans">
        <Routes>
          <Route path="/" element={<AppWelcome />} />
          <Route
            path="*"
            element={
              <AppRoute>
                <AppLayout />
              </AppRoute>
            }
          />
        </Routes>
      </div>
    </Fragment>
  );
};

export default AppContent;
