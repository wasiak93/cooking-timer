import React from "react";
import "./Button.css";

const Button = ({ activity, handler, active, blockName }) => {
  return (
    <button
      onClick={handler}
      className={`button ${active ? "button--active" : ""} ${blockName}__button
      `}
    >
      {activity}
    </button>
  );
};

export default Button;
