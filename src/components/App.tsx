import React, { useEffect, useRef, useState } from 'react';
import '../css/App.css';
import { ITodo } from '../types/data';
import Header from './Header';
import TodoList from './TodoList';

const App: React.FC = () => {
	//value из input в useState сохраняем
	const [value, setValue] = useState('');
	// файлы туду сохраняем в массив через useState
	const [todos, setTodos] = useState<ITodo[]>([]);

	// используем useRef чтобы фокус всегда был на input
	const inputRef = useRef<HTMLInputElement>(null);

	// изменение в input
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
		setValue(evt.target.value);
	};

	// по нажатию Enter добавить туду
	const handleKeyDown = (evt: { key: string }) => {
		if (evt.key === 'Enter') addTodo();
	};

	// функция добавления для туду;
	const addTodo = () => {
		if (value) {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: value,
					complete: false,
				},
			]);
			setValue('');
		}
	};

	// функция удаление туду
	const removeTodo = (id: number): void => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodo = (id: number): void => {
		setTodos(
			todos.map((todo) => {
				if (todo.id !== id) {
					return todo;
				}
				return {
					...todo,
					complete: !todo.complete,
				};
			})
		);
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className='App'>
			<Header />

			<div className='App__container'>
				<input
					placeholder='Add Todo here'
					className='App__input'
					value={value}
					onChange={handleChange}
					ref={inputRef}
					onKeyDown={handleKeyDown}
				/>
				<button className='App__button' onClick={addTodo}>
					Add
				</button>
			</div>

			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	);
};

export default App;
