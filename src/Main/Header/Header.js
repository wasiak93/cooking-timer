import React from "react";
import Button from "../../Buttons/Button/Button";

const Header = ({ mealsArray, handlerMealButton }) => {
  const meals = mealsArray.map(({ id, time, name }) => (
    <Button
      key={id}
      time={time}
      handler={() => handlerMealButton(time)}
      activity={name}
    />
  ));
  return <div className="header">{meals}</div>;
};

export default Header;
