import React from "react";

import Button from "../../Button/Button";
import Clock from "./Clock/Clock";
const Timer = ({ timerValue, start, handlerStart, handlerStop }) => {
  return (
    <div className="timer">
      <Clock timerValue={timerValue} />
      <Button
        start={start}
        handlerStart={handlerStart}
        handlerStop={handlerStop}
      />
    </div>
  );
};

export default Timer;
