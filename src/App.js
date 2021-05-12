import './App.css';
import { Todo } from './components';
import { DataProvider } from './contexts/TodoItemContext';

function App() {
	return (
		<div className='App'>
			<DataProvider>
				<Todo />
			</DataProvider>
		</div>
	);
}

export default App;
