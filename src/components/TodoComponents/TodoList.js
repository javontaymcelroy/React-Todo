import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const sortedList = props.todoArray.sort((a, b) => a.completed - b.completed);
    return (
        <div className="todo-list">
            {sortedList.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    );
};

export default TodoList;