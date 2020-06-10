import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = ({ addMeal, inputsArray, handlerInput }) => {
  const inputs = inputsArray.map(({ idValue, text, type, id, value }) => (
    <div className="form__item" key={id}>
      <label htmlFor={idValue}>{text}</label>
      <input
        type={type}
        id={idValue}
        value={value}
        onChange={(e) => handlerInput(e, id)}
      />
    </div>
  ));
  return (
    <form action="" className="form" onSubmit={addMeal}>
      {inputs}
      <Button blockName="form" activity="add meal" />
    </form>
  );
};
export default Form;
