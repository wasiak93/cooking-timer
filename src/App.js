import React, { useState } from "react";

import "./App.css";
import Main from "./Main/Main";

const App = () => {
  const [mealsArray, setMealsArray] = useState([
    { id: 0, name: "soft boiled eggs", time: 18000 },
    { id: 1, name: "medium boiled eggs", time: 30000 },
    { id: 2, name: "hard boiled eggs", time: 48000 },
    { id: 3, name: "Eggs Benedict", time: 15000 },
    { id: 4, name: "Viennese eggs", time: 36000 },
    { id: 5, name: "Fried eggs", time: 21000 },
  ]);
  const [activity, setActivity] = useState("start");
  const [startTime, setStartTime] = useState(mealsArray[0].time);
  let [timerValue, setTimerValue] = useState(mealsArray[0].time);
  const [intervalId, setIntervalId] = useState(0);
  const [activeButtonId, setActiveButtonId] = useState(mealsArray[0].id);

  const changeTime = () => {
    setTimerValue(--timerValue);
  };
  const handlerStart = () => {
    let interval;
    interval = setInterval(() => changeTime(), 10);
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

  const handlerMealButton = (time, id) => {
    setStartTime(time);
    setTimerValue(time);
    clearInterval(intervalId);
    setActivity("start");
    setActiveButtonId(id);
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
        mealsArray={mealsArray}
        handlerMealButton={handlerMealButton}
        activeButtonId={activeButtonId}
      />
      {timerValue <= 0 && <h1>egg is ready!!!!</h1>}
    </div>
  );
};

export default App;
