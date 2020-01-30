const MyLayout = () => import('layouts/MyLayout.vue');
const Error404 = () => import('pages/Error404.vue');

const routes = [
	{
		path: '/',
		component: MyLayout,
	},
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
	routes.push({
		path: '*',
		component: Error404,
	});
}

export default routes;
