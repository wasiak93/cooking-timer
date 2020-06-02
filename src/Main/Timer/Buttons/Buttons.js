import React from "react";

import Button from "../../../Button/Button";

const Buttons = ({ activity, handlerButtonStart, handlerClear }) => {
  return (
    <div className="buttons">
      <Button activity={activity} handler={handlerButtonStart} active={false} />
      <Button activity="clear" handler={handlerClear} active={false} />
    </div>
  );
};

export default Buttons;
