import React from "react";
import Timer from "./Timer/Timer";
import Header from "./Header/Header";

const Main = ({
  activity,
  handlerButtonStart,
  timerValue,
  handlerClear,
  mealsArray,
  handlerMealButton,
  activeButtonId,
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
      />
    </main>
  );
};

export default Main;
