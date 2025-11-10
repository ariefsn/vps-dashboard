import { env } from '$env/dynamic/private';
import { APP_NAME } from '$env/static/private';
import { generateToken } from '$lib/helper/common';
import { clearFlash, getFlash } from '$lib/helper/flash';
import type { Lang } from '$lib/models';
import { getLocale } from '$lib/paraglide/runtime';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const load = async ({ url, cookies }) => {
	const metaDescription = 'Monitoring your VPS without touch it 😊';
	const baseMetaTags = Object.freeze({
		title: 'Home',
		titleTemplate: '%s | ' + APP_NAME,
		description: metaDescription,
		canonical: new URL(url.pathname, url.origin).href,
		openGraph: {
			type: 'website',
			url: new URL(url.pathname, url.origin).href,
			locale: 'en_IE',
			title: APP_NAME,
			description: metaDescription,
			siteName: APP_NAME,
			images: [
				{
					url: env.ORIGIN + '/favicon.png',
					alt: APP_NAME,
					width: 800,
					height: 600,
					secureUrl: env.ORIGIN + '/favicon.png',
					type: 'image/png'
				}
			]
		}
	}) satisfies MetaTagsProps;

	const flash = getFlash(cookies);

	if (flash) {
		clearFlash(cookies);
	}

	// Add 15 mins for token expiry
	const mins = 60 * 1000;
	const timestamp = Math.floor((Date.now() + 15 * mins) / 1000).toString();
	const token = generateToken(timestamp, env.SALT ?? '');

	return {
		appName: env.APP_NAME,
		baseMetaTags,
		flash,
		url: env.API_URL,
		lang: (getLocale() ?? 'en') as Lang,
		timestamp,
		token
	};
};
