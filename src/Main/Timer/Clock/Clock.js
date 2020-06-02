import React from "react";
import "./Clock.css";

const Clock = ({ timerValue }) => {
  // const hours = Math.floor(timerValue / (60 * 60))
  //   .toString()
  //   .padStart(2, 0);
  let minutes = 0;
  let seconds = 0;
  let cseconds = 0;
  if (timerValue > 0) {
    minutes = Math.floor((timerValue / 60 / 100) % 60)
      .toString()
      .padStart(2, 0);
    seconds = Math.floor((timerValue / 100) % 60)
      .toString()
      .padStart(2, 0);
    cseconds = Math.floor(timerValue % 100)
      .toString()
      .padStart(2, 0);
  }
  return (
    <div className="clock">
      {/* <div className="clock__item">{hours}</div> */}
      <div className="clock__item">{minutes}</div>
      <div className="clock__item">{seconds}</div>
      <div className="clock__item">{cseconds}</div>
    </div>
  );
};

export default Clock;
