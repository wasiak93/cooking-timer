import React from "react";

import Button from "../../../Button/Button";
import "./Console.css";

const Console = ({ activity, handlerButtonStart, handlerClear }) => {
  const buttonsArray = [
    {
      id: 0,
      activity: activity,
      handler: handlerButtonStart,
      active: false,
      blockName: "console",
    },
    {
      id: 1,
      activity: "clear",
      handler: handlerClear,
      active: false,
      blockName: "console",
    },
  ];
  const buttons = buttonsArray.map(
    ({ id, activity, handler, active, blockName }) => (
      <Button
        key={id}
        activity={activity}
        handler={handler}
        active={active}
        blockName={blockName}
      />
    )
  );
  return <div className="console">{buttons}</div>;
};

export default Console;
