import React, { useState, useEffect } from "react";

import "./App.css";
import Main from "./Main/Main";
import Alarm from "./Alarm/Alarm";
import Form from "./Form/Form";

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
  // const [startTime, setStartTime] = useState(100);
  let [timerValue, setTimerValue] = useState(mealsArray[0].time);
  // let [timerValue, setTimerValue] = useState(100);
  const [intervalId, setIntervalId] = useState(0);
  const [activeButtonId, setActiveButtonId] = useState(mealsArray[0].id);
  const [actualMeal, setActualMeal] = useState(mealsArray[0].name);
  const [inputsArray, setInputsArray] = useState([
    { id: 0, text: "Meal name", idValue: "name", value: "", type: "text" },
    {
      id: 1,
      text: "Time(in seconds)",
      idValue: "time",
      value: 1,
      type: "number",
    },
  ]);
  const [mealId, setMealId] = useState(mealsArray.length);

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

  const handlerInput = (e, id) => {
    const value = e.target.value;

    const newInputsArray = inputsArray.map((input) =>
      input.id === id ? { ...input, value } : input
    );

    setInputsArray(newInputsArray);
  };

  const addMeal = (e) => {
    e.preventDefault();
    if (inputsArray[0].value.length >= 2 && inputsArray[1].value >= 10) {
      let newId = mealId;
      newId++;

      setMealsArray([
        ...mealsArray,
        {
          id: mealId,
          name: inputsArray[0].value,
          time: inputsArray[1].value,
        },
      ]);

      setMealId(newId);
      const newInputsArray = inputsArray.map((input) =>
        input.type === "text" ? { ...input, value: "" } : { ...input, value: 0 }
      );
      setInputsArray(newInputsArray);
    }
  };

  return (
    <div className="app">
      <Form
        addMeal={addMeal}
        inputsArray={inputsArray}
        handlerInput={handlerInput}
      />
      <div className="info">
        <p>
          {inputsArray[0].value.length < 2 && "name minimum 2 signs!"}
          {inputsArray[1].value < 10 && " time more then 10 seconds!"}
        </p>
      </div>
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
