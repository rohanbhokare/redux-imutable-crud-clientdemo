import React from 'react';

import './Person.css';

const person = (props) => (
    <div className="Person">
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <button onClick={props.clicked}>DELETE </button>
    </div>
);

export default person;