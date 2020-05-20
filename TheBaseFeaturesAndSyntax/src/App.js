import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//class App extends Component {
  const App = () => {
    const [ personsState, setPersonsState ] = useState({
    persons: [
      { name = 'John', age = 28 },
      { name = 'Jane', age = 26 },
      { name = 'Mike', age = 29 }
    ],
    otherState: 'some other value'
  })
    
    console.log(personsState);
    
    const switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    setPersonsState({
      persons: [
      { name = 'Bob', age = 28 },
      { name = 'Jane', age = 26 },
      { name = 'Mike', age = 27 }
    ],
      otherState: personsState.otherState
    })
  }
    
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
    <button onClick={switchNameHandler}>Switch Name</button>
     <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Racing</Person>
     <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
  }
 
//}

export default App;
