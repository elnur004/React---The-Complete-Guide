import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p onClick={props.click}>{props.user} is in this paragraph</p>
      <p>I hope {props.user} will be overwritten!</p>
    </div>
  );
};

export default userOutput;
