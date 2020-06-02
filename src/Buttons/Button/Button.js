import React from "react";

const Button = ({ activity, handler }) => {
  return <button onClick={handler}>{activity}</button>;
};

export default Button;
