import React from "react";
import "./ClockItem.css";

const ClockItem = ({ id, value, name }) => {
  return (
    <div className="clock-item" key={id}>
      <p className="clock-item__paragraph  clock-item__paragraph--bigger">
        {value}
      </p>
      <p className="clock-item__paragraph ">{name}</p>
    </div>
  );
};

export default ClockItem;
