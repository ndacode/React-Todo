import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    console.log(props.ToDoList)
    return(
        <div className='todo-list'>
            {props.ToDoList.map((item, i) => (
                <Todo
                    key={i}
                    id={item.id}
                    entry={item.entry}
                    toggleComplete={props.toggleComplete}
                    complete={item.complete}
                />
            ))}
            <button className='clear-btn' onClick={props.clearComplete}>
                Clear Complete
            </button>
        </div>
    );
};
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList;