import React from "react";
import "./Clock.css";

const Clock = ({ timerValue }) => {
  const hours = Math.floor(timerValue / (60 * 60));
  const minutes = Math.floor(timerValue / 60) % 60;
  const seconds = Math.floor(timerValue % 60);

  return (
    <div className="clock">
      <div className="clock__item">{hours}</div>
      <div className="clock__item">{minutes}</div>
      <div className="clock__item">{seconds}</div>
    </div>
  );
};

export default Clock;
