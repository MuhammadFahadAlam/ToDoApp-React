const TodoItemReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM': {
			return [...state, action.payload];
		}
		case 'REMOVE_ITEM': {
			return state.filter((v, i) => i !== action.payload.index);
		}
		case 'CHANGE_STATUS': {
			let newState = [...state];
			newState.forEach((v, i) => {
				if (i === action.payload.index) {
					console.log(v.status, 'status');
					if (!v.status) {
						v.status = true;
					}
				}
			});
			return newState;
		}
		default:
			return state;
	}
};

export default TodoItemReducer;
