import '../../css/App.css'
import React, {useState, useEffect, useRef} from 'react';
import {ITodo} from '../../types/data'
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

const App: React.FC = () => {
  //value из input в useState сохраняем
  const [value, setValue] = useState('');
  // файлы туду сохраняем в массив через useState
  const [todos, setTodos] = useState<ITodo[]>([]);


  // функция добавления для туду;
  const addTodo = () => {
    if (value) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false,
      }])
      setValue('')
    }
  }


  return <div className='App'>
    <Header/>

    <div className="App__container">
      <input placeholder='Add Todo here' className='App__input' value={value} onChange={e => setValue(e.target.value)}/>
      <button className='App__button' onClick={addTodo}>Add</button>

    </div>


    <TodoList items={todos}/>
  </div>;
};

export default App;
