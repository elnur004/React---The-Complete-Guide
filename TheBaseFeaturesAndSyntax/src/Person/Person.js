import React from "react";

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange(props.changed) />
      <input type="text" onChange(props.hobbies) />
    </div>
  );
};

export default person;
