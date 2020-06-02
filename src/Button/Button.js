import React from "react";
import "./Button.css";

const Button = ({ activity, handler, active }) => {
  return (
    <button onClick={handler} className={active ? "active" : null}>
      {activity}
    </button>
  );
};

export default Button;
