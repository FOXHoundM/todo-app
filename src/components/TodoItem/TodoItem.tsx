import React from 'react';
import {ITodo} from "../../types/data";
import '../../css/TodoItem.css';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
}

const TodoItem: React.FC<ITodoItem> = ({id, title, complete, toggleTodo, removeTodo}) => {
  return (
    <div className='TodoItem'>

      <label className="TodoItem__label">
        <input className='TodoItem__checkbox' type='checkbox' checked={complete} onChange={() => toggleTodo(id)}/>
        <h1 className="TodoItem__title">{title}</h1>
        <button onClick={() => removeTodo(id)} className="TodoItem__button"/>


      </label>


    </div>
  );
};

export default TodoItem;
