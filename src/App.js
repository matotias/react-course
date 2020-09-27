import React from 'react';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Matias" age="31"/>
        <Person name="Paulina" age="32">My hobby is learning Japanese</Person>
    </div>
  );
}

export default App;
