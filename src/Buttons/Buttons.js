import React from "react";

import ButtonTimer from "./Button/Button";

const Buttons = ({ activity, handlerButtonStart, handlerClear }) => {
  return (
    <div className="buttons">
      <ButtonTimer activity={activity} handler={handlerButtonStart} />
      <ButtonTimer activity="clear" handler={handlerClear} />
    </div>
  );
};

export default Buttons;
