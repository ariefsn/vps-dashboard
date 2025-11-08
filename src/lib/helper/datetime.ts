import dayjs, { type Dayjs, type ManipulateType } from 'dayjs';

export const formatDate = (date: Date | string, format: string, opt?: { locale?: string }) => {
	dayjs.locale(opt?.locale);
	return dayjs(date).format(format);
};

export function dateRange(start: Dayjs, end: Dayjs, unit: ManipulateType = 'days') {
	const range = [];
	let current = start;

	while (!current.isAfter(end)) {
		range.push(current);
		current = current.add(1, unit);
	}

	return range;
}

export const formatTime = (totalSeconds: number) => {
	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds % 60;

	const pad = (n: number) => n.toString().padStart(2, '0');

	return {
		hours: pad(hours),
		minutes: pad(minutes),
		seconds: pad(seconds)
	};
};
