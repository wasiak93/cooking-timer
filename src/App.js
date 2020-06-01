import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [start, setStart] = useState(false);
  let [timerValue, setTimerValue] = useState(120);

  const changeTime = () => {
    setTimerValue(--timerValue);
  };
  const hanndlerTimer = () => {
    setInterval(() => changeTime(), 1000);
    setStart(true);
  };
  return (
    <div className="app">
      <form action="" className="form">
        form
      </form>

      <main className="main">
        {start ? null : <button onClick={() => hanndlerTimer()}>Start</button>}
        {timerValue}
        {timerValue <= 0 ? <div>time is over</div> : null}
      </main>
    </div>
  );
};

export default App;
