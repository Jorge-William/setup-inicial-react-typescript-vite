import './styles/global.css'
import { Habit } from './components/Habit'

function App() {
	return (
		<>
			<Habit completed={20} />
			<Habit completed={10} />
			<Habit completed={70} />
			<Habit completed={60} />
		</>
	)
}

export default App
