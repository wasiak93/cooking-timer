import React from "react";

const ButtonTimer = ({ activity, handler }) => {
  return <button onClick={handler}>{activity ? activity : "clear"}</button>;
};

export default ButtonTimer;
