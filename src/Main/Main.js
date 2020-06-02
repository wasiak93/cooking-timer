import React from "react";
import Button from "../Button/Button";

const Main = ({ start, handlerStop, handlerStart, timerValue }) => {
  return (
    <main className="main">
      <Button
        start={start}
        handlerStart={handlerStart}
        handlerStop={handlerStop}
      />
      {timerValue <= 0 ? (
        <>
          <p>0</p>
          <div>time is over</div>
        </>
      ) : (
        <p>{timerValue}</p>
      )}
    </main>
  );
};

export default Main;
