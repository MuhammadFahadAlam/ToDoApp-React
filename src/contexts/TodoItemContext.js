import React, { createContext, useReducer } from 'react';
import TodoItemReducer from './../reducers/TodoItemReducer';

const initialData = [];

export const DataContext = createContext(initialData);

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(TodoItemReducer, initialData);

	function addItem(item) {
		dispatch({
			type: 'ADD_ITEM',
			payload: {
				name: item.name,
				start: item.start,
				end: item.end,
				status: false,
			},
		});
	}

	function removeItem(index) {
		dispatch({
			type: 'REMOVE_ITEM',
			payload: {
				index: index,
			},
		});
	}

	function changeStatus(index) {
		dispatch({
			type: 'CHANGE_STATUS',
			payload: {
				index: index,
			},
		});
	}

	return (
		<DataContext.Provider
			value={{
				data: state,
				addItem,
				removeItem,
				changeStatus,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
