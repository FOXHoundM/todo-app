import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import '../../css/TodoList.css';

import {ITodo} from "../../types/data";

interface ITodoListProps {
  items: ITodo[]
}

const TodoList: React.FC<ITodoListProps> = (props) => {
  return (
    <div className='TodoList'>
      {
        props.items.map(todo => <TodoItem key={todo.id} {...todo} />)
      }

    </div>
  );
};

export default TodoList;
