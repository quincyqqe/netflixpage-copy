import styles from './Episodes.module.scss'
import React from 'react'

const Episodes = () => {
	return (
		<div className={styles.container}>
			<hr />
			<p>
				This long-running series has received many accolades, including grand
				prize for manga at the Japan Media Arts Festival.
			</p>

			<hr />
			<div>
				<h2 className={styles.title}>
					Videos <span>| ONE PIECE</span>
				</h2>
			</div>
			<div className={styles.scroll__container}>
				<div className={styles.container__videos}>
					<div className={styles.row}>
						<iframe
							src='https://www.youtube.com/embed/YFbno_aPm0w'
							title='Trailer 1'
							allowFullScreen
						></iframe>
						<iframe
							src='https://www.youtube.com/embed/VP8QfLfuE7g'
							title='Trailer 2'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Episodes
