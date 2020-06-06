import React from "react";

import Clock from "./Clock/Clock";
import Title from "./Title/Title";
import Console from "./Console/Console";
import "./Timer.css";

const Timer = ({
  timerValue,
  activity,
  handlerButtonStart,
  handlerClear,
  actualMeal,
}) => {
  return (
    <div className="timer">
      <Title actualMeal={actualMeal} />
      <Clock timerValue={timerValue} handlerClear={handlerClear} />
      <Console
        activity={activity}
        handlerButtonStart={handlerButtonStart}
        handlerClear={handlerClear}
      />
    </div>
  );
};

export default Timer;
