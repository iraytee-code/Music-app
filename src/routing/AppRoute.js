import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AppRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated === true ? children : <Navigate to="/" />;
};

export default AppRoute;
