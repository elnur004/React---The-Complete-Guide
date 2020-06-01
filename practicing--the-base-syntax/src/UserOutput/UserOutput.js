import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p>{props.userName} is in this paragraph<p>
      <p>I hope i'll be overwritten!<p>
    <div>
  );
};

export default userOutput;
