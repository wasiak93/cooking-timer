import React from "react";
import "./Button.css";

const Button = ({ activity, handler, active, classEnd }) => {
  return (
    <button
      onClick={handler}
      className={`button ${active ? "button--active" : ""} button--${classEnd}
      `}
    >
      {activity}
    </button>
  );
};

export default Button;
