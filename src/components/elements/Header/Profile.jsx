import styles from './Header.module.scss'

const Profile = () => {
	return (
		<div className={styles['profile-wrapper']}>
			<div className={styles.notification}>
				<i className='bx bxs-bell'></i>
				<span></span>
			</div>
			<div className={styles.profile}>
				<div>
					<img
						src='https://favim.com/pd/s11/orig/7/773/7737/77378/jojos-bizarre-adventure-leone-abbacchio-anime-icons-Favim.com-7737862.jpg'
						width='50px'
						alt='avatar'
					/>
				</div>
				<i className='bx bx-caret-down'></i>
			</div>
		</div>
	)
}

export default Profile
