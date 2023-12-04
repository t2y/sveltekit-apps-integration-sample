import { apps } from '$lib/index';
import { startNodeServer } from '$lib/server/server';

const kitDemo1 = apps['kit-demo1'];
startNodeServer(kitDemo1);

import type { Handle } from '@sveltejs/kit';

const prefix1 = '/kit-demo1';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith(prefix1)) {
		if (event.request.method == 'GET') {
			return fetch(kitDemo1.url + event.url.pathname);
		} else if (event.request.method == 'POST') {
			const data = await event.request.formData();
			const endpoint = kitDemo1.url + event.url.pathname + event.url.search;
			return fetch(endpoint, { method: 'POST', body: data });
		}
	}
	const response = await resolve(event);
	return response;
};
