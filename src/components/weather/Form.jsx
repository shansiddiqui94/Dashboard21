import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="type your city" />
      <button>Check</button>
    </form>
  );
};

export default Form;
