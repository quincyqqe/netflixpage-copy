import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './components/elements/Episodes/Episodes'
import Footer from './components/elements/Footer/Footer'
import Header from './components/elements/Header/Header'
import Main from './components/elements/Main/Main'
import MoreDetails from './components/elements/MoreDetails/MoreDetails'
import LoginPage from './components/auth/login'

	function MultiComponentContainer() {
		return (
			<>
				<Header />
				<Main />
				<Episodes />
				<MoreDetails />
				<Footer />
			</>
		)
	}

function App() {

	return (
		<Router basename='/netflixpage-copy/'>
			<Routes>
				<Route path='login' element={<LoginPage />} />
				<Route path='/*' element={<MultiComponentContainer />} />
			</Routes>
		</Router>
	)
}

export default App
