import React from "react";
import Button from "../../Button/Button";
import "./Header.css";

const Header = ({ mealsArray, handlerMealButton, activeButtonId }) => {
  const meals = mealsArray.map(({ id, time, name }) => (
    <Button
      key={id}
      time={time}
      handler={() => handlerMealButton(time, id)}
      activity={name}
      active={activeButtonId === id ? true : false}
    />
  ));
  return <div className="header">{meals}</div>;
};

export default Header;
