'use client';

import { Link } from 'waku';
import SignOutButton from './sign-out-button';

export const Header = () => {
	return (
		<header className='flex items-center gap-4 p-6 lg:fixed lg:left-0 lg:top-0'>
			<h2 className='text-lg font-bold tracking-tight'>
				<Link to='/'>Waku starter</Link>
			</h2>
			<SignOutButton />
		</header>
	);
};
