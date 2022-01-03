import React from "react";

const Form = (props) => {
  return (
    <form className="formBox" onSubmit={props.onSubmit}>
      <input
        value={props.value} //putting value in the input field
        onChange={props.onChange} //using this func onChange any time is triggered
        type="text"
        name="city"
        placeholder="type your city"
      />
      <button class="bg-cyan-500 hover:bg-cyan-600 ...">Search</button>
    </form>
  );
};

export default Form;
