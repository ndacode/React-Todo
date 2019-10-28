import React from 'react';

const Todo = props => {
    return (
        <div 
            // className={`To Do:${props.item.complete ? ' complete' : ''}`}
        >
            <p>{props.entry}</p>
        </div>
    );
};

export default Todo;