import React from 'react';

const userOutput = (props) => {
  return(
    <div>
      <p>{props.user} is in this paragraph<p>
      <p>I hope i'll be overwritten!<p>
    <div>
  );
};

export default userOutput;
