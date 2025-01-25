'use client';

import { signOut } from 'firebase/auth';
import { Link } from 'waku';
import { auth } from '../lib/firebase';

export const Header = () => {
	const handleSignOut = async () => {
		try {
			await signOut(auth);
			alert('Signed out successfully!');
		} catch (error) {
			alert(`Error signing out:, ${error} `);
		}
	};
	return (
		<header className='flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0'>
			<h2 className='text-lg font-bold tracking-tight'>
				<Link to='/'>Waku starter</Link>
			</h2>
			<button onClick={handleSignOut}>Sign out</button>
		</header>
	);
};
