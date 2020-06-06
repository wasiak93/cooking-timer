import React from "react";
import Timer from "./Timer/Timer";
import Header from "./Header/Header";
import "./Main.css";

const Main = ({
  activity,
  handlerButtonStart,
  timerValue,
  handlerClear,
  mealsArray,
  handlerMealButton,
  activeButtonId,
  actualMeal,
}) => {
  return (
    <main className="main">
      <Header
        mealsArray={mealsArray}
        handlerMealButton={handlerMealButton}
        activeButtonId={activeButtonId}
      />
      <Timer
        activity={activity}
        handlerButtonStart={handlerButtonStart}
        handlerClear={handlerClear}
        timerValue={timerValue}
        actualMeal={actualMeal}
      />
    </main>
  );
};

export default Main;
