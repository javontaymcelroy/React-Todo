import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="insert task"
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleCleartodos}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;