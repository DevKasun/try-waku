// import { ProtectedRoute } from '../components/ProtectedRoute';

export default async function HomePage() {
	return (
			<div className="flex flex-col items-center justify-center space-y-4">
				<h1 className="text-4xl font-bold">Welcome to Home Page</h1>
				<p className="text-lg">This is a protected page. Only authenticated users can see this content.</p>
			</div>
	);
}

export const getConfig = async () => {
	return {
		render: 'static',
	} as const;
};
