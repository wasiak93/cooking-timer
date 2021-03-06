import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = ({ addMeal, inputsArray, handlerInput, infoIsActive }) => {
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
      <div className="form__inputs-wrapper">
        <div className="form__inputs">{inputs}</div>
        <Button blockName="form" activity="add meal" />
      </div>
      {infoIsActive && (
        <div className="form__info">
          meal name minimum 2 signs, time minimum 10 seconds
        </div>
      )}
    </form>
  );
};
export default Form;
