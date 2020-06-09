import React from "react";

import alarm from "../assets/sounds/alarm.mp3";
import Button from "../Button/Button";

const Alarm = ({ actualMeal, stopAudio }) => {
  return (
    <div className="alarm">
      <p>{actualMeal} is ready!!!!</p>
      <audio className="audio-element">
        <source src={alarm}></source>
      </audio>
      {/* <button className="button" onClick={stopAudio}>
        turn off alarm
      </button> */}
      <Button activity="turn off alarm" handler={stopAudio} classEnd="alarm" />
    </div>
  );
};

export default Alarm;
