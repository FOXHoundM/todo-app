import React from 'react';
import {ITodo} from "../../types/data";
import '../../css/TodoItem.css';

interface ITodoItem extends ITodo {
}

const TodoItem: React.FC<ITodoItem> = ({id, title, complete}) => {
  return (
    <div className='TodoItem'>

      <input className='TodoItem__input' type='radio' checked={complete}/>
      <h1 className="TodoItem__title">{title}</h1>
      <button className="TodoItem__button"/>

    </div>
  );
};

export default TodoItem;
