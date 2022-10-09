import React from "react";
import { useNavigate } from "react-router-dom";

const AppWelcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <button onClick={handleClick}>Listen</button>
    </div>
  );
};

export default AppWelcome;
