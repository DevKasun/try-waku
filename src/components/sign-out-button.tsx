import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

function SignOutButton() {
	const handleSignOut = async () => {
		try {
			await signOut(auth);
			alert('Signed out successfully!');
		} catch (error) {
			alert(`Error signing out:, ${error} `);
		}
	};

	return <button onClick={handleSignOut}>Sign out</button>;
}

export default SignOutButton;
