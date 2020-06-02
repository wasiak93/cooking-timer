import React from "react";
import Timer from "./Timer/Timer";

const Main = ({ activity, handlerButtonStart, timerValue, handlerClear }) => {
  return (
    <main className="main">
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
