import React from "react";

import Clock from "./Clock/Clock";
import Title from "./Title/Title";
import Buttons from "./Console/Console";
import "./Timer.css";

const Timer = ({ timerValue, activity, handlerButtonStart, handlerClear }) => {
  return (
    <div className="timer">
      <Title />
      <Clock timerValue={timerValue} handlerClear={handlerClear} />
      <Buttons
        activity={activity}
        handlerButtonStart={handlerButtonStart}
        handlerClear={handlerClear}
      />
    </div>
  );
};

export default Timer;
