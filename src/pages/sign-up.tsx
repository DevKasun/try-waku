'use client';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			alert('User created successfully');
		} catch (error) {
			alert('Error signing up');
		}
	};

	return (
		<form onSubmit={handleSignUp}>
			<input
				type='text'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type='submit'>Sign Up</button>
		</form>
	);
}
