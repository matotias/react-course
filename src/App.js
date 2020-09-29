import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Matias", age: 31},
            {name: "Paulina", age: 32},
            {name: "Mili", age: 2},
            {name: "Choli", age: 5}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 31},
                {name: "Paulina", age: 32},
                {name: "Mili", age: 3},
                {name: "Choli", age: 6}
            ]
        })
    }

    nameChangedHandler = event => {
        this.setState({
            persons: [
                {name: "Matias", age: 31},
                {name: "Paulina", age: 32},
                {name: event.target.value, age: 3},
                {name: "Choli", age: 6}
            ]
        })
    }



    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button onClick={() => this.switchNameHandler('Popin!!!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Popin click')}>My hobby is learning Japanese</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    changed={this.nameChangedHandler}
                />
                <Person
                    name={this.state.persons[3].name}
                    age={this.state.persons[3].age}/>
            </div>
      )
  };
}

export default App;
