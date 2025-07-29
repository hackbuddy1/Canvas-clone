import React from 'react';
import todos from '../data/todos.json';

const TodoList = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">To Do</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-start justify-between mb-4 pb-2 border-b last:border-0">
            <div className="flex items-start">
              <input type="checkbox" id={`todo-${todo.id}`} className="mt-1 mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <div>
                <label htmlFor={`todo-${todo.id}`} className="font-semibold text-gray-700">{todo.task}</label>
                <p className="text-sm text-gray-500">Due: {todo.dueDate}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">×</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;