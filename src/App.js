import React, { useState } from "react";

import "./App.css";
import Main from "./Main/Main";

const App = () => {
  const [activity, setActivity] = useState("start");
  let [startTime, setStartTime] = useState(3600);
  let [timerValue, setTimerValue] = useState(3600);
  const [intervalId, setIntervalId] = useState(0);

  const changeTime = () => {
    setTimerValue(--timerValue);
  };
  const handlerStart = () => {
    let interval;
    interval = setInterval(() => changeTime(), 1000);
    setIntervalId(interval);
    setActivity("stop");
  };
  const handlerStop = () => {
    setActivity("start");
    clearInterval(intervalId);
  };
  const handlerClear = () => {
    setTimerValue(startTime);
    clearInterval(intervalId);
    setActivity("start");
  };
  return (
    <div className="app">
      <form action="" className="form">
        form
      </form>
      <Main
        activity={activity}
        handlerButtonStart={activity === "start" ? handlerStart : handlerStop}
        handlerClear={handlerClear}
        timerValue={timerValue}
      />
    </div>
  );
};

export default App;
