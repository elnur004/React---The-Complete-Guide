import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
     <Person/>
     <Person/>
     <Person/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
}

export default App;
