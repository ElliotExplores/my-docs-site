import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [ 
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/ElliotExplores/my-docs-site',
			},
			sidebar: [
				{
					label: 'JavaScript',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Variable Hoisting", link: '/javascript/variable-hoisting/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
