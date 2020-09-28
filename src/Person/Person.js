import React from 'react';

const person = (props) => ((
    <div>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. {props.children}</p>
    </div>
));

export default person;
