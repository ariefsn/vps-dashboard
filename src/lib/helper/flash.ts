import { COOKIE_KEYS } from '$lib/constant';
import { redirect, type Cookies } from '@sveltejs/kit';

type FlashType = 'success' | 'error' | 'info';

export const setFlash = (
	cookies: Cookies,
	message: string,
	type: FlashType = 'info',
	opt?: { maxAge: number }
) => {
	cookies.set(COOKIE_KEYS.flash, JSON.stringify({ message, type }), {
		path: '/',
		maxAge: opt?.maxAge ?? 5,
		httpOnly: true
	});
};

export const getFlash = (cookies: Cookies) => {
	const raw = cookies.get(COOKIE_KEYS.flash);
	if (!raw) return null;

	try {
		const data = JSON.parse(raw);
		cookies.delete(COOKIE_KEYS.flash, { path: '/' });
		return data as { message: string; type: FlashType };
	} catch {
		return null;
	}
};

export const clearFlash = (cookies: Cookies) => {
	cookies.delete(COOKIE_KEYS.flash, { path: '/' });
};

export const redirectWithFlash = ({
	cookies,
	status = 303,
	location,
	message,
	type = 'success'
}: {
	cookies: Cookies;
	status?: number;
	location: string;
	message: string;
	type?: FlashType;
}) => {
	setFlash(cookies, message, type);
	throw redirect(status, location);
};
