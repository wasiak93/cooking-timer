import React from "react";

import Button from "../Button/Button";
import Audio from "./Audio";
import "./Alarm.css";

const Alarm = ({ actualMeal, stopAudio }) => {
  return (
    <div className="alarm">
      <p className="alarm__paragraph">{actualMeal} is ready!!!!</p>
      <Audio />
      <Button activity="turn off alarm" handler={stopAudio} classEnd="alarm" />
    </div>
  );
};

export default Alarm;
