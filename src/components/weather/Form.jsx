import React from "react";

const handleSubmit = (e, props) => {
  e.preventDefault();
  props.getWeather(e.target.city.value);
};

const Form = (props) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, props)}>
      <input type="text" name="city" placeholder="type your city" />
      <button>Check</button>
    </form>
  );
};

export default Form;
