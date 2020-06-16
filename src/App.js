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
  const [timerValue, setTimerValue] = useState(mealsArray[0].time);
  const [intervalId, setIntervalId] = useState(0);
  const [activeButtonId, setActiveButtonId] = useState(mealsArray[0].id);
  const [actualMeal, setActualMeal] = useState(mealsArray[0].name);
  const [inputsArray, setInputsArray] = useState([
    {
      id: 0,
      text: "Meal name",
      idValue: "name",
      value: "",
      type: "text",
      info: "name minimum 2 signs!",
    },
    {
      id: 1,
      text: "Time(in seconds)",
      idValue: "time",
      value: 10,
      type: "number",
      info: " time more then 10 seconds!",
    },
  ]);
  const [mealId, setMealId] = useState(mealsArray.length);
  const [infoIsActive, setInfoIsActive] = useState(false);

  let interval;

  const changeTime = () => {
    setTimerValue((prevTimerValue) => prevTimerValue - 1);
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
    handlerStop();
  };

  const handlerMealButton = (time, id, name) => {
    setStartTime(time);
    setTimerValue(time);
    handlerStop();
    setActiveButtonId(id);
    setActualMeal(name);
  };

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  useEffect(() => {
    if (timerValue <= 0) {
      playAudio();
      clearInterval(intervalId);
    }
  });

  const handlerInput = (e, id) => {
    const value = e.target.value;
    setInfoIsActive(false);

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

      setMealsArray((prevMealsArray) => {
        return [
          ...prevMealsArray,
          {
            id: mealId,
            name: inputsArray[0].value,
            time: inputsArray[1].value * 100,
          },
        ];
      });

      setMealId(newId);
      const newInputsArray = inputsArray.map((input) =>
        input.type === "text"
          ? { ...input, value: "" }
          : { ...input, value: 10 }
      );
      setInputsArray(newInputsArray);
      setInfoIsActive(false);
    } else setInfoIsActive(true);
  };

  return (
    <div className="app">
      <Form
        addMeal={addMeal}
        inputsArray={inputsArray}
        handlerInput={handlerInput}
        infoIsActive={infoIsActive}
      />

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
        <Alarm actualMeal={actualMeal} stopAudio={handlerClear} />
      )}
    </div>
  );
};

export default App;
