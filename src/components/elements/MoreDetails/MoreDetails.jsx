import styles from './MoreDetails.module.scss'
import React from 'react'

const MoreDetails = () => {
	return (
		<>
			<h2 className={styles.header}>More Details</h2>
			<div className={styles.container}>
				<div className={styles.row}>
					<h3>
						Watch offline{' '}
						<p className={styles.paragraph}>
							Download and watch everywhere you go.
						</p>
					</h3>

					<h3>
						Genres
						<p className={styles.paragraph}>
							Genres Action Anime, Japanese, Anime Series, Fantasy Anime, TV
							Shows Based on Manga
						</p>
					</h3>
					<h3>
						This show is...<p className={styles.paragraph}>Exciting</p>
					</h3>
				</div>
			</div>
		</>
	)
}

export default MoreDetails
