export type TMap<T> = { [key: string]: T };

export type Errors<T> =
	| {
			[K in keyof T]?: T[K] extends object ? Errors<T[K]> : string[];
	  }
	| undefined;

export type FormResults<T, Extra = undefined> = {
	success?: boolean;
	message?: string;
	errors?: Errors<T>;
	values?: T;
	extra?: Extra;
};

export type Lang = 'en' | 'id';

export * from './atomProps';
