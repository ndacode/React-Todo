import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/TodoComponents/TodoForm';

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

  addTodo = entry => {
    const newTodo = {
      entry: entry,
      id: '',
      complete: false
    };
    this.setState({
      ToDoList: [...this.state.ToDoList, newTodo]
    });
  };
  
  // toggleTodo = id => {
  //   this.setState({
  //     ToDoList: this.state.ToDoList.map(item => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           complete: !item.complete
  //         };
  //       } else {
  //         return item;
  //       }
  //     })
  //   })
  // }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log('rendering...')
    return (
      <div className= "App">
        <div className = "header">
            <h2>Welcome to your Todo App!</h2>
            <TodoForm/>
        </div>
      </div>
    );
  }
}

export default App;
