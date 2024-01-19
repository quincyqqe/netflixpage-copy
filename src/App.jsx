import Episodes from './components/elements/Episodes/Episodes'
import Footer from './components/elements/Footer/Footer'
import Header from './components/elements/Header/Header'
import Main from './components/elements/Main/Main'
import MoreDetails from './components/elements/MoreDetails/MoreDetails'

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Main />
				<Episodes />
				<MoreDetails />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default App
