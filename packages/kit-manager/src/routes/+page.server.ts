import type { PageServerLoad } from './$types';
import { apps } from '$lib/index';

export const load: PageServerLoad = async ({ params }) => {
	const res = await fetch(apps['kit-demo1'].entrypoint);
	const html = await res.text();
	return { html };
};
