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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const formatHz = (freqMhz: number) => {
	const value = freqMhz / 1000; // MHz → GHz
	const unit = 'GHz';
	return `${value.toFixed(2)} ${unit}`;
};

export const formatUptime = (seconds: number): string => {
	const days = Math.floor(seconds / (24 * 3600));
	const hours = Math.floor((seconds % (24 * 3600)) / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;

	if (days > 0) return `${days}d ${hours}h ${minutes}m`;
	if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
	if (minutes > 0) return `${minutes}m ${secs}s`;
	return `${secs}s`;
};

export const getDisplaySizeInInches = (widthMm: number, heightMm: number): string => {
	if (!widthMm || !heightMm) return '';
	const diagonalMm = Math.sqrt(widthMm ** 2 + heightMm ** 2);
	const inch = diagonalMm / 25.4;
	return `${inch.toFixed(0)}"`;
};

export * from './datetime';
export * from './flash';
export * from './logger';
export * from './strings';
export * from './ui';

export * from './labels';
