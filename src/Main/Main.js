import React from "react";
import Timer from "./Timer/Timer";

const Main = ({ start, handlerStop, handlerStart, timerValue }) => {
  return (
    <main className="main">
      <Timer
        start={start}
        handlerStop={handlerStop}
        handlerStart={handlerStart}
        timerValue={timerValue}
      />
    </main>
  );
};

export default Main;
