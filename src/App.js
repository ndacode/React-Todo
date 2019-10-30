import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todos = [
  {
  entry: 'Update Resume',
  id: 0,
  complete: false
  },
  {
    entry: 'Update Meetup Groups',
    id: 1,
    complete: false
  },
  {
    entry: 'Clean out the Garage',
    id: 2,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      ToDoList: todos
    };
  }

  addTodo = item => {
    const newTodo = {
      entry: item,
      id: Date.now(),
      complete: false
    };
    this.setState({
      ToDoList: [...this.state.ToDoList, newTodo]
    });
  };
  
  toggleComplete = id => {
    console.log(id);
    this.setState({
      
      ToDoList: this.state.ToDoList.map(todo => {
        console.log('clicked');
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log('rendering...')
    return (
      <div className= "App">
        <div className = "header">
            <h2>Welcome to your Todo App!</h2>
            <TodoForm addTodo={this.addTodo}/>
        </div>
            <TodoList toggleComplete={this.toggleComplete}
                      ToDoList={this.state.ToDoList}
            />
        </div>
    );
  }
}

export default App;
