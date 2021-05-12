import React from 'react';
import style from './Todo.module.css';
import { AddItem, Item, TopBar } from '../../components';

function Todo() {
	return (
		<div className={style.todo}>
			<TopBar />
			<hr />
			<AddItem />
			<hr />
			<div className={style.scroll}>
				<Item />
			</div>
		</div>
	);
}

export default Todo;
