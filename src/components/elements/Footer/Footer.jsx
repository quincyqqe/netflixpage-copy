import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div>
			<footer>
				<div className={styles.footerContainer}>
					<div className={styles.footerColumn}>
						<hr />
						<ul>
							<li>
								<a href='#'>FAQ</a>
							</li>
							<li>
								<a href='#'>Investor Relations</a>
							</li>
							<li>
								<a href='#'>Privacy</a>
							</li>
							<li>
								<a href='#'>Speed Test</a>
							</li>
							<li>
								<a href='#'>Ad Choices</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<hr />
						<ul>
							<li>
								<a href='#'>Help Center</a>
							</li>
							<li>
								<a href='#'>Jobs</a>
							</li>
							<li>
								<a href='#'>Cookie Preferences</a>
							</li>
							<li>
								<a href='#'>Legal Notices</a>
							</li>
							<li>
								<a href='#'>Only on Netflix</a>
							</li>
						</ul>
					</div>
					<div className={styles.footerColumn}>
						<hr />

						<ul>
							<li>
								<a href='#'>Account</a>
							</li>
							<li>
								<a href='#'>Ways to Watch</a>
							</li>
							<li>
								<a href='#'>Corporate Information</a>
							</li>
							<li>
								<a href='#'>Terms of Use</a>
							</li>
							<li>
								<a href='#'>Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
