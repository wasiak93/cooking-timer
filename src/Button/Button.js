import React from "react";
import "./Button.css";

const Button = ({ activity, handler, active }) => {
  return (
    <button
      onClick={handler}
      className={`button ${active ? "button--active" : ""}`}
    >
      {activity}
    </button>
  );
};

export default Button;
