import React from "react";
import "./Clock.css";

const Clock = ({ timerValue }) => {
  // const hours = Math.floor(timerValue / (60 * 60))
  //   .toString()
  //   .padStart(2, 0);
  const minutes = Math.floor((timerValue / 60 / 100) % 60)
    .toString()
    .padStart(2, 0);
  const seconds = Math.floor((timerValue / 100) % 60)
    .toString()
    .padStart(2, 0);
  const cseconds = Math.floor(timerValue % 100)
    .toString()
    .padStart(2, 0);
  console.log(minutes);
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
