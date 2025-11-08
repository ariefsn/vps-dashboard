import { APP_NAME } from '$env/static/private';
import { Period } from '$lib/graphql/generated.js';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = ({ url }) => {
	const searchParams = url.searchParams;
	const period = searchParams.get('period') ?? Period.Month;
	const metaDescription = 'Monitoring your VPS without touch it 😊';

	const pageMetaTags = Object.freeze({
		title: 'Home',
		description: metaDescription,
		openGraph: {
			title: APP_NAME,
			description: metaDescription
		}
	}) satisfies MetaTagsProps;

	return {
		pageMetaTags,
		period
	};
};
