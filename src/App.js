import React, { useState } from "react";

import "./App.css";
import Main from "./Main/Main";

const App = () => {
  const [start, setStart] = useState(false);
  let [timerValue, setTimerValue] = useState(3600);
  const [intervalId, setIntervalId] = useState(0);

  const changeTime = () => {
    setTimerValue(--timerValue);
  };
  const handlerStart = () => {
    let interval;
    interval = setInterval(() => changeTime(), 1000);
    setIntervalId(interval);
    setStart(true);
  };
  const handlerStop = () => {
    setStart(false);
    clearInterval(intervalId);
  };
  return (
    <div className="app">
      <form action="" className="form">
        form
      </form>
      <Main
        start={start}
        handlerStart={handlerStart}
        handlerStop={handlerStop}
        timerValue={timerValue}
      />
    </div>
  );
};

export default App;
