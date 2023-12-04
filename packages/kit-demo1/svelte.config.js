import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		csrf: {
			checkOrigin: false
		},
		paths: {
			relative: false,
			base: '/kit-demo1'
		},
		adapter: adapter()
	}
};

export default config;
