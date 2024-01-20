import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './LoginPage.scss'

const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		// Handle sign-in logic here

		// Redirect to the main page after successful login
		navigate('/')
	}
	return (
		<div className='bg'>
			<div className='sign-in'>
				<form onSubmit={handleSubmit}>
					<h2>Sign in</h2>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type='submit'>Sign in</button>
				</form>
			</div>
		</div>
	)
}

export default LoginPage
