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
            persons = <div>
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
