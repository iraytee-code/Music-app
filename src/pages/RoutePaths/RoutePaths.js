import React from "react";
import { Route, Routes } from "react-router-dom";
import AppRoute from "../../routing/AppRoute";
import routes from "../../routing/routes";

const RoutePaths = () => (
  <Routes>
    {routes.map(
      (route) =>
        route.elements &&
        route.elements.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <AppRoute>
                <route.component />
              </AppRoute>
            }
          />
        ))
    )}
  </Routes>
);

export default RoutePaths;
