import React from 'react';

const Todo = props => {
    return (
        <div 
            className={`To Do:${props.complete ? ' complete' : ''}`}
        >
            <p>{props.entry}</p>
        </div>
    );
};

export default Todo;