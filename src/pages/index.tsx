export default async function HomePage() {
	return <div></div>;
}

export const getConfig = async () => {
	return {
		render: 'dynamic',
	} as const;
};
