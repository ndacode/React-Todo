import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return(
        <div className='todo-list'>
            {props.ToDoList.map(item => (
                <Todo
                    key={item.id}
                    entry={item.entry}
                    complete={false}
                />
            ))}

        </div>
    );
};
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

export default TodoList;