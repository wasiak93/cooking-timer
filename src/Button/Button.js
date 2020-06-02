import React from "react";

const Button = ({ start, handlerStart, handlerStop }) => {
  return (
    <button onClick={start ? handlerStop : handlerStart}>
      {start ? "Stop" : "Start"}
    </button>
  );
};

export default Button;
