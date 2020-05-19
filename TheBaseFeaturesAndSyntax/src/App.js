import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name = 'John', age = 28 },
      { name = 'Jane', age = 26 },
      { name = 'Mike', age = 29 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render () {
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
    <button onClick={this.switchNameHandler}>Switch Name</button>
     <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: Racing</Person>
     <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
     <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
  }
}

export default App;
