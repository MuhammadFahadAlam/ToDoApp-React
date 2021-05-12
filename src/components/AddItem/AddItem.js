import React, { useContext, useState } from 'react';
import style from './AddItem.module.css';
import { DataContext } from './../../contexts/TodoItemContext';

function AddItem() {
	const { addItem } = useContext(DataContext);
	const [item, setItem] = useState({
		name: '',
		start: '',
		end: '',
		error: 0,
	});
	return (
		<div className={style.additem}>
			<div className={style.box}>
				<div className={style.form}>
					<input
						type='text'
						value={item.name}
						placeholder='Task Name'
						className={style.itemName}
						id='ItemName'
						name='ItemName'
						onChange={(e) =>
							setItem({ ...item, name: e.target.value })
						}
					/>
					<input
						type='text'
						placeholder='Start Time'
						className={style.start}
						id='start'
						name='start'
						value={item.start}
						onChange={(e) =>
							setItem({ ...item, start: e.target.value })
						}
					/>
					<input
						type='text'
						placeholder='End Time'
						className={style.end}
						id='end'
						name='end'
						value={item.end}
						onChange={(e) =>
							setItem({ ...item, end: e.target.value })
						}
					/>
					{item.error ? (
						<p style={{ color: 'red', fontSize: '13px' }}>
							# Kindly fill the fields
						</p>
					) : null}
				</div>
				<div className={style.buttonDiv}>
					<button
						className={style.btn}
						onClick={() => {
							if (item.name && item.start && item.end) {
								addItem(item);
								setItem({ ...item, error: 0 });
								setItem({
									name: '',
									start: '',
									end: '',
									error: 0,
								});
							} else {
								setItem({ ...item, error: 1 });
							}
						}}
					>
						Add Item
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddItem;
