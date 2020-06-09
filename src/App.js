import React, { useState, useEffect } from "react";

import "./App.css";
import Main from "./Main/Main";
import Alarm from "./Alarm/Alarm";

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
  // const [startTime, setStartTime] = useState(mealsArray[0].time);
  const [startTime, setStartTime] = useState(100);
  // let [timerValue, setTimerValue] = useState(mealsArray[0].time);
  let [timerValue, setTimerValue] = useState(100);
  const [intervalId, setIntervalId] = useState(0);
  const [activeButtonId, setActiveButtonId] = useState(mealsArray[0].id);
  const [actualMeal, setActualMeal] = useState(mealsArray[0].name);
  let interval;

  const changeTime = () => {
    setTimerValue(--timerValue);
  };
  const handlerStart = () => {
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

  const handlerMealButton = (time, id, name) => {
    setStartTime(time);
    setTimerValue(time);
    clearInterval(intervalId);
    setActivity("start");
    setActiveButtonId(id);
    setActualMeal(name);
  };

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  const stopAudio = () => {
    setTimerValue(startTime);
  };

  useEffect(() => {
    if (timerValue <= 0) {
      playAudio();
      clearInterval(intervalId);
    }
  });

  return (
    <div className="app">
      {/* <form action="" className="form">
        form
      </form> */}
      <Main
        activity={activity}
        handlerButtonStart={activity === "start" ? handlerStart : handlerStop}
        handlerClear={handlerClear}
        timerValue={timerValue}
        mealsArray={mealsArray}
        handlerMealButton={handlerMealButton}
        activeButtonId={activeButtonId}
        actualMeal={actualMeal}
      />
      {timerValue <= 0 && (
        <Alarm actualMeal={actualMeal} stopAudio={stopAudio} />
      )}
    </div>
  );
};

export default App;
