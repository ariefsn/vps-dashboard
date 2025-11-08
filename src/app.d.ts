// See https://svelte.dev/docs/kit/types#app.d.ts

import type { UserProfileFragment } from '$lib/graphql/generated';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: UserProfileFragment;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
