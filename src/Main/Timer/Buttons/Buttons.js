import React from "react";

import ButtonTimer from "./ButtonTimer";

const Buttons = ({ activity, handlerButtonStart, handlerClear }) => {
  return (
    <div className="buttons">
      <ButtonTimer activity={activity} handler={handlerButtonStart} />
      <ButtonTimer handler={handlerClear} />
    </div>
  );
};

export default Buttons;
