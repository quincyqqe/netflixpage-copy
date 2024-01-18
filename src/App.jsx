import Episodes from './components/elements/Episodes/Episodes'
import Footer from './components/elements/Footer/Footer'
import Header from './components/elements/Header/Header'
import Main from './components/elements/Main/Main'
import MoreDetails from './components/elements/MoreDetails/MoreDetails'

function App() {
	return (
		<>
			<section>
				<Header />
				<Main />
			</section>

			<section>
				<Episodes />

				<MoreDetails />
			</section>

			<section>
				<Footer />
			</section>
		</>
	)
}

export default App
