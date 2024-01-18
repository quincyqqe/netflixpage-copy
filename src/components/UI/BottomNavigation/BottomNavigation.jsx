import styles from './BottomNavigation.module.scss'

const tabs = [
	{
		_id: 1,
		name: 'Overview',
	},
	{
		_id: 2,
		name: 'Videos',
	},
	{
		_id: 3,
		name: 'More Details',
	},
]

const BottomNavigation = () => {
	return (
		<nav className={styles.nav}>
			{tabs.map(tab => (
				<button key={tab._id}>{tab.name}</button>
			))}
		</nav>
	)
}

export default BottomNavigation
