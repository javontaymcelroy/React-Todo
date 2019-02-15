import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css";

const todoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArray
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todoArray: [...this.state.todoArray, newItem]
    })

  };

  toggleItem = itemId => {
    this.setState({
      todoArray: this.state.todoArray.map(item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoArray: this.state.todoArray.filter(item => !item.completed)
    });
  };


  render() {
    return (
      <div className="App">
        <div className="Header">
          <h2>To-Do List</h2>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todoArray={this.state.todoArray}
          toggleItem={this.toggleItem}
        />
        <button onClick={this.clearCompleted} className="clear-btn">Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;