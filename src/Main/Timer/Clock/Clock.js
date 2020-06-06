import React from "react";
import "./Clock.css";
import ClockItem from "./ClockItem";

const Clock = ({ timerValue }) => {
  // const hours = Math.floor(timerValue / 60 / 60 / 100)
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
  const clockItemsArray = [
    // { id: 0, name: "hours", value: hours },
    { id: 1, name: "minutes", value: minutes },
    { id: 2, name: "seconds", value: seconds },
    { id: 3, name: "hundredths of a second", value: cseconds },
  ];

  const clockItems = clockItemsArray.map((item) => (
    <ClockItem key={item.id} {...item} />
  ));

  return <div className="clock">{clockItems}</div>;
};

export default Clock;
