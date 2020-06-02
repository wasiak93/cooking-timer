import React from "react";

const Main = ({ start, handlerStop, handlerStart, timerValue }) => {
  return (
    <main className="main">
      <button onClick={start ? handlerStop : handlerStart}>
        {start ? "Stop" : "Start"}
      </button>

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
