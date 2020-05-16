import React from 'react';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //    <h1>Hi, I'm a React App</h1>
  //   </div>
  // );
  return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
}

export default App;
