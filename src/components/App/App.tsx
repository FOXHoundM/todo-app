import './App.css';
import React, { useState, useEffect, useRef } from 'react';

import {ITodo} from '../../types/data'

const App: React.FC = () => {

	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

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
		<input value={value} onChange={e => setValue(e.target.value)}/>
		<button onClick={addTodo}>Add</button>
	</div>;
};

export default App;
