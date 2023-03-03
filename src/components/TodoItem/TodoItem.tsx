import React from 'react';
import {ITodo} from "../../types/data";
import '../../css/TodoItem.css';

interface ITodoItem extends ITodo {
}

const TodoItem: React.FC<ITodoItem> = ({id, title, complete}) => {
  return (
    <div className='TodoItem'>

      <input className='TodoItem__input' type='checkbox' checked={complete}/>
      {title}
      {/*<button className="TodoItem__button"/>*/}

    </div>
  );
};

export default TodoItem;
