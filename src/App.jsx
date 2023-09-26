import React from 'react';
import Nav from './components/Nav';
import Team from './pages/Team';
import Footer from './components/Footer';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};
const App = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/team',
					element: <Team />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
