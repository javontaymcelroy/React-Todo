import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    const todoArray = props.todoArray;
    const sortedList = todoArray.sort((a, b) => a.completed - b.completed);
    const toggleItem = props.toggleItem;
    return (
        <div className="todo-list">
            {sortedList.map(item => (
                <Todo key={item.id} item={item} toggleItem={toggleItem} />
            ))}
        </div>
    );
};

export default TodoList;