import React from "react";

import Button from "../../../Button/Button";

const Console = ({ activity, handlerButtonStart, handlerClear }) => {
  return (
    <div className="buttons">
      <Button activity={activity} handler={handlerButtonStart} active={false} />
      <Button activity="restart" handler={handlerClear} active={false} />
    </div>
  );
};

export default Console;
