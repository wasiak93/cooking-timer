import React from "react";
import alarm from "../assets/sounds/alarm.mp3";
import { useRef, useEffect } from "react";

const Audio = ({ timerValue, intervalId }) => {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.play();
    clearInterval(intervalId);
  }, [intervalId]);
  return (
    <audio className="audio-element" ref={audioRef}>
      <source src={alarm}></source>
    </audio>
  );
};

export default Audio;
