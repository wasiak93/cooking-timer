import React from "react";

import Button from "../../../Button/Button";

const Console = ({ activity, handlerButtonStart, handlerClear }) => {
  const buttonsArray = [
    {
      id: 0,
      activity: activity,
      handler: handlerButtonStart,
      active: false,
      classEnd: "console",
    },
    {
      id: 1,
      activity: activity,
      handler: handlerClear,
      active: false,
      classEnd: "console",
    },
  ];
  const buttons = buttonsArray.map(
    ({ id, activity, handler, active, classEnd }) => (
      <Button
        key={id}
        activity={activity}
        handler={handler}
        active={active}
        classEnd={classEnd}
      />
    )
  );
  return <div className="buttons">{buttons}</div>;
};

export default Console;
