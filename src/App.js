import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {id: 'p1', name: "Matias", age: 31},
            {id: 'p2', name: "Paulina", age: 32},
            {id: 'p3', name: "Mili", age: 2},
            {id: 'p4', name: "Choli", age: 5}
        ],
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const changedPersonIndex = this.state.persons.findIndex((p) => p.id === id)
        const changedPerson = {...this.state.persons[changedPersonIndex]}
        changedPerson.name = event.target.value
        const persons = [...this.state.persons]
        persons[changedPersonIndex] = changedPerson
        this.setState({persons: persons})
    }

    togglePersonsHandler = () => (this.setState({showPersons: !this.state.showPersons}))

    deletePersonHandler = personIndex => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
        this.setState({persons: persons})
    }

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
                <div> {
                        this.state.persons.map(
                            (person, index) => (
                                <Person
                                    name={person.name}
                                    age={person.age}
                                    click={() => this.deletePersonHandler(index)}
                                    changed={event => this.nameChangedHandler(event, person.id)}
                                    key={person.id}
                                />
                                ))}
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
