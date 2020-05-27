import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// CLASS BASED COMPONENT
class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: 'Jane', age: 26 },
      { name: 'Mike', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({
      persons: [
      { name: newName, age: 28 },
      { name: 'Jane', age: 26 },
      { name: 'Mike', age: 27 }
    ]
    })
  }
  
  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Jane', age: 26 },
        { name: 'Mike', age: 27 }
      ]
    })
  }
  
  hobbiesChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'John', age: 28, hobbies: event.target.value },
        { name: 'Jane', age: 26 },
        { name: 'Mike', age: 27 }
      ]
    })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
  return (
    <div className="App">
     <h1>Hi, I'm a React App</h1>
     <p>This is really working!</p>
    <button 
      style={style}
      onClick={this.switchNameHandler.bind(this, 'Max')}>Switch Name</button>        
       // {/* ...onClick={() => this.switchNameHandler('Max!!!')}...  THIS CAN BE INEFFICIENT(depending on the size of 
       // application) react can rerender certain things in app too often*/}
     <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click={this.switchNameHandler.bind(this, 'Maximillian')}
      changed={this.nameChangedHandler}
      hobbies={this.hobbiesChangeHandler}>My hobbies: {this.state.persons[0].hobbies}</Person>
     <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}/>
     <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/>
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
  //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
  }
}
export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// // FUNCTIONAL COMPONENT
//   const App = () => {
//     const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'John', age: 28 },
//       { name: 'Jane', age: 26 },
//       { name: 'Mike', age: 29 }
//     ]
//     })
    
//     const [otherState, setOtherState] = useState('somother value');
    
//     console.log(personsState, otherState);
    
//     const switchNameHandler = () => {
//     // DON'T DO THIS: this.state.persons[0].name = 'Maximillian';
//     setPersonsState({
//       persons: [
//       { name: 'Bob', age: 28 },
//       { name: 'Jane', age: 26 },
//       { name: 'Mike', age: 27 }
//     ]
//     })
//   }
    
//   return (
//     <div className="App">
//      <h1>Hi, I'm a React App</h1>
//      <p>This is really working!</p>
//     <button onClick={switchNameHandler}>Switch Name</button>
//      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: Racing</Person>
//      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
//   //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')); 
//   //return React.createElement(...) method gets compiled to JSX code behind the scenes. (even though we can't see that)
//   }
 
// export default App;
