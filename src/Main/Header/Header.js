import React from "react";

const Header = ({ mealsArray, handlerMealButton }) => {
  const meals = mealsArray.map(({ id, time, name }) => (
    <button key={id} time={time} onClick={() => handlerMealButton(time)}>
      {name}
    </button>
  ));
  return <div className="header">{meals}</div>;
};

export default Header;
