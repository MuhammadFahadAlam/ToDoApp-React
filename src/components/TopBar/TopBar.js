import React, { useContext } from 'react';
import style from './TopBar.module.css';
import { DataContext } from './../../contexts/TodoItemContext';
import { getCurrentDate } from './../../utils/Date';

function TopBar() {
	const context = useContext(DataContext);
	let monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let date = getCurrentDate().date;
	let month = monthNames[getCurrentDate().month - 1];
	return (
		<div className={style.topbar}>
			<div className={style.dated}>
				<p className={style.todayDate}>
					{date} {month}
				</p>
			</div>

			<div className={style.row}>
				<div className={style.tasks}>
					<h1 className={style.heading}>Today</h1>
					<p className={style.para}>{context.data.length} tasks</p>
				</div>
				<div className={style.dateDiv}>
					<div className={style.dateBox}>
						<span className={style.date}>
							<b>{date}</b>
						</span>
						<br />
						<span className={style.month}>{month}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
