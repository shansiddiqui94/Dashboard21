import React from "react";

// const handleSubmit = (e, props) => {
//   e.preventDefault();
//   props.getWeather(e.target.city.value);
// };

const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        value={props.value} //putting value in the input field
        onChange={props.onChange} //using this func onChange any time is triggered
        type="text"
        name="city"
        placeholder="type your city"
      />
      <button>Check</button>
    </form>
  );
};

export default Form;
