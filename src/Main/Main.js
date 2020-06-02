import React from "react";
import Button from "../Button/Button";
import Clock from "./Clock/Clock";

const Main = ({ start, handlerStop, handlerStart, timerValue }) => {
  // console.log(timerValue);
  return (
    <main className="main">
      <Clock timerValue={timerValue} />
      {/* {timerValue <= 0 ? (
        <>
          <p>0</p>
          <div>time is over</div>
        </>
      ) : (
        <p>{timerValue}</p>
      )} */}
      <Button
        start={start}
        handlerStart={handlerStart}
        handlerStop={handlerStop}
      />
    </main>
  );
};

export default Main;
