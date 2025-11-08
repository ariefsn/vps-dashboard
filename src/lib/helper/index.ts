import type { Errors } from '$lib/models';
import type { OperationResult } from '@urql/svelte';
import CryptoJS from 'crypto-js';
import prettyBytes from 'pretty-bytes';
import type z from 'zod/v3';
import { capitalize } from './strings';

export const debounce = (fn: () => void, timeout: number = 800) => {
	let timer: NodeJS.Timeout;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this);
		}, timeout);
	};
};

export const waitFor = <T = void>(what: () => T, cb: () => void, delay = 100) => {
	const interval = setInterval(() => {
		if (what()) {
			clearInterval(interval);
			cb();
		}
	}, delay);
};

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Valuable<T> = { [K in keyof T as T[K] extends null | undefined ? never : K]: T[K] };

export const removeEmptyValue = <T extends object, V = Valuable<T>>(obj: T): V => {
	return Object.fromEntries(
		Object.entries(obj).filter(
			([, v]) => !((typeof v === 'string' && !v.length) || v === null || typeof v === 'undefined')
		)
	) as V;
};

export const parseGraphqlError = (res: OperationResult) => {
	let error = res?.error?.message ?? '';
	if ((res?.error?.graphQLErrors ?? [])?.length > 0) {
		error = res?.error?.graphQLErrors?.map((e) => e.message).join(', ') ?? '';
	}

	return capitalize(error.replace('[GraphQL]', ' ')).trim();
};

export const keysOf = <T extends object>(_: T) => Object.keys(_) as (keyof T)[];

export const parseZodErrors = <T>(errors: z.ZodIssue[] | undefined): Errors<T> => {
	if (errors?.length === 0) {
		return undefined;
	}

	const result: Record<string, any> = {};

	for (const err of errors ?? []) {
		const path = err.path;
		let target = result;

		// buat nested object sesuai path
		for (let i = 0; i < path.length; i++) {
			const key = String(path[i]);
			if (i === path.length - 1) {
				target[key] = target[key] || [];
				target[key].push(err.message);
			} else {
				target[key] = target[key] || {};
				target = target[key];
			}
		}
	}

	return result;
};

export const generateToken = (input: string, salt: string) => {
	const hash = CryptoJS.HmacSHA256(input, salt);
	return hash.toString(CryptoJS.enc.Hex);
};

export const formatBytes = (bytes: number) => {
	return prettyBytes(bytes, { binary: true });
};

export * from './datetime';
export * from './flash';
export * from './logger';
export * from './strings';
export * from './ui';

export * from './labels';
