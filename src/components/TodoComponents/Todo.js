import React from 'react';


const Todo = props => {
    console.log(props)
    return (
        <div 
            className= 
             {`todo${props.complete ? ' complete': ''}`}
            // className={`item${props.item.purchased ? ' purchased' : ''}`}

            onClick={() => props.toggleComplete(props.id)}
            
        >
            <p>{props.entry}</p>
        </div>
    );
};

export default Todo;