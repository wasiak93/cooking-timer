import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = ({ addMeal, inputsArray, handlerInput }) => {
  const inputs = inputsArray.map(({ idValue, text, type, id, value, info }) => (
    <div className="form__item" key={id}>
      <label htmlFor={idValue} className="label">
        {text}
      </label>
      <input
        type={type}
        id={idValue}
        value={value}
        onChange={(e) => handlerInput(e, id)}
        className="input"
      />
    </div>
  ));
  return (
    <form action="" className="form" onSubmit={addMeal}>
      <div className="form__inputs">{inputs}</div>
      <Button blockName="form" activity="add meal" />
    </form>
  );
};
export default Form;
