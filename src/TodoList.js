import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle, onRemove}) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ul>
    );
};
export default TodoList;