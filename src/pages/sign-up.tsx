'use client';

import { createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';
import { Link, useRouter_UNSTABLE as useRouter } from 'waku';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const router = useRouter()

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			router.push('/');
		} catch (error) {
			const authError = error as AuthError;
			switch (authError.code) {
				case 'auth/email-already-in-use':
					setError('An account with this email already exists');
					break;
				case 'auth/invalid-email':
					setError('Invalid email address');
					break;
				case 'auth/operation-not-allowed':
					setError('Email/password accounts are not enabled');
					break;
				case 'auth/weak-password':
					setError('Password should be at least 6 characters');
					break;
				default:
					setError('Failed to create account');
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
			<form onSubmit={handleSignUp} className="w-full max-w-md space-y-4 bg-white p-8 rounded-lg shadow">
				<h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
				{error && <div className="text-red-500 text-sm text-center">{error}</div>}
				<div className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
					disabled={loading}
				>
					{loading ? 'Creating Account...' : 'Sign Up'}
				</button>
				<p className="text-center text-sm text-gray-600">
					Already have an account?{' '}
					<Link to="/sign-in" className="text-blue-500 hover:text-blue-600">
						Sign In
					</Link>
				</p>
			</form>
		</div>
	);
}

// export const getConfig = async () => {
//   return {
//     render: 'dynamic',
//   } as const;
// };
