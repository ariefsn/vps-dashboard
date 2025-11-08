import { env } from '$env/dynamic/private';
import { createLogger } from '$lib/helper';
import { paraglideMiddleware } from '$lib/paraglide/server';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { handleProxy } from 'sveltekit-proxy';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

const handleReverseProxy: Handle = ({ event, resolve }) => {
	const log = createLogger('hooks/handleReverseProxy');
	const token = env.TOKEN;

	if (event.url.pathname.startsWith('/api')) {
		return handleProxy({
			target: env.API_URL ?? '',
			rewrite: (path) => path.replace('/api', ''),
			origin: env.ORIGIN ?? '',
			onRequest: ({ request }) => {
				const headers = new Headers(request.headers);
				const address = event.getClientAddress();
				headers.set('X-Client-IP', request.headers.get('X-Forwarded-For') || address || '');
				headers.set('accept-encoding', 'identity');
				headers.delete('host');

				const newReq = new Request(env.API_URL, {
					headers,
					method: request.method,
					body: request.body,
					// @ts-expect-error Node 18+ requires duplex for streaming body
					duplex: 'half'
				});

				return new Request(newReq);
			},
			onResponse: async ({ response }) => {
				return response;
			},
			onError: ({ error }) => {
				log.debug('handleReverseProxy/onError', { token, error });
			}
		})({ event, resolve });
	}

	return resolve(event);
};

export const handle: Handle = sequence(handleReverseProxy, handleParaglide);
