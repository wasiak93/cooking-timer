import React from "react";
import "./Title.css";

const Title = ({ actualMeal }) => {
  return <h1 className="title"> {actualMeal} ready in</h1>;
};

export default Title;
