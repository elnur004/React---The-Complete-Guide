import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
     <Person name="John" age="28">My hobbies: Racing</Person>
     <Person name="Jane" age="26"/>
     <Person name="Mike" age="29"/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
}

export default App;
