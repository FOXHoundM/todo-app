import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import '../../css/TodoList.css';

import {ITodo} from "../../types/data";

interface ITodoListProps {
  items: ITodo[]
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = ({items, toggleTodo, removeTodo}) => {
  return (
    <div className='TodoList'>
      {
        items.map(todo => (<TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo} />))
      }

    </div>
  );
};

export default TodoList;
