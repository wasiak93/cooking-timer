import React from "react";

import Button from "../Button/Button";
import Audio from "./Audio";
import "./Alarm.css";

const Alarm = ({ actualMeal, stopAudio, timerValue, intervalId }) => {
  return (
    <div className="alarm">
      <p className="alarm__paragraph">{actualMeal} is ready!!!!</p>
      <Audio timerValue={timerValue} intervalId={intervalId} />
      <Button activity="turn off alarm" handler={stopAudio} blockName="alarm" />
    </div>
  );
};

export default Alarm;
