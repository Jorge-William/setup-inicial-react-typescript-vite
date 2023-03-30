interface HabitProps {
	completed: number
}

export function Habit(props: HabitProps) {
	return (
		<div className='bg-zinc-900 w-10 t-10 rounded text-white m-2 text-center'>
			{' '}
			{props.completed}
		</div>
	)
}