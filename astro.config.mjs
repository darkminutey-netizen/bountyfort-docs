import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BountyPort Docs',
			social: {
				github: 'https://github.com/bountyport/bountyport',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'What is BountyPort?', slug: 'introduction' },
						{ label: 'Architecture Overview', slug: 'architecture' },
					],
				},
				{
					label: 'Components',
					items: [
						{ label: 'Smart Contracts', slug: 'components/contracts' },
						{ label: 'Indexer Service', slug: 'components/indexer' },
						{ label: 'Web Application', slug: 'components/web-app' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Local Setup', slug: 'guides/setup' },
						{ label: 'Contributor Guide', slug: 'guides/contributing' },
					],
				},
				{
					label: 'Roadmap',
					slug: 'roadmap',
				},
			],
		}),
	],
});
