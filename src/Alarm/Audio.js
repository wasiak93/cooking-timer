import React from "react";
import alarm from "../assets/sounds/alarm.mp3";

const Audio = () => {
  return (
    <audio className="audio-element">
      <source src={alarm}></source>
    </audio>
  );
};

export default Audio;
