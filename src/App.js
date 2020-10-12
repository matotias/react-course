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
        ],
        showPersons: false
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

    togglePersonsHandler = () => (this.setState({showPersons: !this.state.showPersons}))

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person =>
                        <Person name={person.name} age={person.age}/>
                        )}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
      )
  };
}

export default App;
