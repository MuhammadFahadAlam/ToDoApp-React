import React, { useContext } from 'react';
import style from './Item.module.css';
import { DataContext } from './../../contexts/TodoItemContext';

function Item() {
	const { data, changeStatus } = useContext(DataContext);
	let items = data.map((v, i) => {
		return (
			<div className={style.item} key={i}>
				<div className={style.status}>
					<p>{v.status ? 'Completed' : ''}</p>
				</div>
				<div className={style.checkDiv}>
					<input
						checked={v.status}
						onChange={() => changeStatus(i)}
						type='checkbox'
						name=''
						id=''
					/>
				</div>
				<div className={style.about}>
					<h1>
						<b>{v.name}</b>
					</h1>
					<p>
						{v.start} - {v.end}
					</p>
				</div>
			</div>
		);
	});

	return <div>{items}</div>;
}

export default Item;
