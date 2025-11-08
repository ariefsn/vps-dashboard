import { cacheExchange, Client, fetchExchange, subscriptionExchange } from '@urql/svelte';
import { createClient as createWSClient } from 'graphql-ws';

const wsClient = (url: string, timestamp?: string, token?: string) =>
	createWSClient({
		url,
		connectionParams: () => ({ 'APP-TOKEN': token, 'APP-TIMESTAMP': timestamp })
	});

export const gqlClient = ({
	url,
	token,
	timestamp
}: {
	url?: string;
	token?: string;
	timestamp?: string;
}) => {
	const baseUrl = (url || '') + '/graphql';
	const clientUrl = '/api/graphql';
	let wsUrl = baseUrl.replace('http://', 'ws://');
	if (baseUrl.startsWith('https://')) {
		wsUrl = baseUrl.replace('https://', 'wss://');
	}

	const ws = wsClient(wsUrl, timestamp, token);

	return new Client({
		url: clientUrl,
		fetchOptions: () => {
			const headers = new Headers();
			headers.set('APP-TOKEN', token || '');
			headers.set('APP-TIMESTAMP', timestamp || '');

			return {
				headers
			};
		},
		exchanges: [
			cacheExchange,
			fetchExchange,
			subscriptionExchange({
				forwardSubscription(request) {
					const input = { ...request, query: request.query || '' };
					return {
						subscribe(sink) {
							const unsubscribe = ws.subscribe(input, sink);
							return { unsubscribe };
						}
					};
				}
			})
		]
	});
};
