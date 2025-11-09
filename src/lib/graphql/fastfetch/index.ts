import type { Client } from '@urql/svelte';
import {
	type FastfetchGetQuery,
	type FastfetchGetQueryVariables,
	type FastfetchStreamInput,
	type FastfetchStreamSubscription,
	type FastfetchStreamSubscriptionVariables
} from '../generated';
import { FASTFETCH_GET, FASTFETCH_STREAM } from './operations.gql';

class FastfetchApi {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async get() {
		return this.client.query<FastfetchGetQuery, FastfetchGetQueryVariables>(FASTFETCH_GET, {});
	}

	stream(input: FastfetchStreamInput) {
		return this.client.subscription<
			FastfetchStreamSubscription,
			FastfetchStreamSubscriptionVariables
		>(FASTFETCH_STREAM, {
			input
		});
	}
}

export default FastfetchApi;
