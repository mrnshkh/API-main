export const routes = [
	{
		path: /^\/$/,
		view: async app => {
			const response = await fetch('src/pages/home/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/home/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/home/script.js'),
	},
	{
		path: /^\/order$/,
		view: async app => {
			const response = await fetch('src/pages/order/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/order/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/order/script.js'),

	},
		{
		path: /^\/contact$/,
		view: async app => {
			const response = await fetch('src/pages/contact/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/contact/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/contact/script.js'),

	},
			{
		path: /^\/CLAAS$/,
		view: async app => {
			const response = await fetch('src/pages/CLAAS/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/CLAAS/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/CLAAS/script.js'),

	},
			{
		path: /^\/vacancy$/,
		view: async app => {
			const response = await fetch('src/pages/vacancy/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/vacancy/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/vacancy/script.js'),

	},
  {
		path: /^\/policy$/,
		view: async app => {
			const response = await fetch('src/pages/policy/index.html')
			const html = await response.text()
			app.innerHTML = html
		},
		loadStyles: () =>
			import('../pages/policy/style.css', { assert: { type: 'css' } }),
		loadScripts: () => import('../pages/policy/script.js'),

	},
	
	
]
