import { browser } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';
import { cacheExchange, Client, fetchExchange } from '@urql/svelte';

let apiUrl: string;

if (browser) {
	apiUrl = '/api/graphql';
} else {
	const { env } = await import('$env/dynamic/private');
	apiUrl = `${env.ORIGIN}/api/graphql`;
}

export const gqlClient = (options?: { cookies?: Cookies }) => {
	return new Client({
		url: apiUrl,
		exchanges: [cacheExchange, fetchExchange],
		fetchOptions: () => {
			const cookieHeader =
				options?.cookies
					?.getAll()
					.map(({ name, value }) => `${name}=${value}`)
					.join('; ') ?? '';

			return {
				headers: {
					cookie: cookieHeader
				}
			};
		}
	});
};
