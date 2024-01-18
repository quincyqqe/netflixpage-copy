import Search from './../../UI/Search/Search'
import styles from './Header.module.scss'
import Profile from './Profile'

const Header = () => {
	return (
		<div className={styles.header}>
			<div>
				<a href='/'>
					<img
						src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png'
						alt='Netflix'
						height='35'
						width='112'
					/>
				</a>
				<Search />
			</div>
			<Profile />
		</div>
	)
}

export default Header
