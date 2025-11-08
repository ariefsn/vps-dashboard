import { m } from '$lib/paraglide/messages';

export const vnstatLabels = {
	transmitted: m['vnstat.transmitted']() + ' ↗️',
	received: m['vnstat.received']() + ' ↙️',
	total: m['vnstat.total'](),
	estimated: m['vnstat.estimated'](),
	hours: m['vnstat.hours'](),
	days: m['vnstat.days'](),
	weeks: m['vnstat.weeks'](),
	months: m['vnstat.months'](),
	years: m['vnstat.years']()
};
