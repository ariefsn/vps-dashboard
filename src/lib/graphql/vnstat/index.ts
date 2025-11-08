import type { Client } from '@urql/svelte';
import {
	type VnstatGetQuery,
	type VnstatGetQueryVariables,
	type VnstatInput,
	type VnstatStreamInput,
	type VnstatStreamSubscription,
	type VnstatStreamSubscriptionVariables
} from '../generated';
import { VNSTAT_GET, VNSTAT_STREAM } from './operations.gql';

class VnstatApi {
	client: Client;

	constructor(client: Client) {
		this.client = client;
	}

	async get(input: VnstatInput) {
		return this.client.query<VnstatGetQuery, VnstatGetQueryVariables>(VNSTAT_GET, {
			input
		});
	}

	stream(input: VnstatStreamInput) {
		return this.client.subscription<VnstatStreamSubscription, VnstatStreamSubscriptionVariables>(
			VNSTAT_STREAM,
			{
				input
			}
		);
	}
}

export default VnstatApi;
