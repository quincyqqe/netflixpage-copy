import Button from '../../UI/Button/Button'
import styles from './Main.module.scss'

const Information = ({ movie }) => {
	const addToFavorites = movieName => {
		let favorites = localStorage.getItem('favMovies')

		if (!favorites) {
			// Если 'favMovies' не существует в localStorage, создаем новый массив
			favorites = []
		} else {
			favorites = JSON.parse(favorites)
		}

		favorites.push(movieName)
		localStorage.setItem('favMovies', JSON.stringify(favorites))

		alert(`${movieName} теперь в избранном!`)
	}
	return (
		<div className={styles.info}>
			<img
				src={movie.logo}
				alt={movie.name}
				width='300'
				style={{ opacity: 0.7 }}
			/>

			<div className={styles.additional}>
				<span>{movie.year}</span>
				<span>{movie.limitAge}</span>
				<span>{movie.seasons}</span>
				<span>{movie.genre}</span>
			</div>

			<div className={styles.description}>{movie.description}</div>

			<div className={styles.buttons}>
				<Button cb={() => console.log('video is open')}>
					<i className='bx bx-play' style={{ color: '#c62e21' }}></i>
					<span>Play</span>
				</Button>
				<Button cb={() => addToFavorites(movie.name)}>
					<i className='bx bx-plus'></i>
					<span>My list</span>
				</Button>
			</div>
		</div>
	)
}

export default Information
