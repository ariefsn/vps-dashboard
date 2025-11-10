<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { Period } from '$lib/graphql/generated';
	import { capitalize } from '$lib/helper/strings';
	import { m } from '$lib/paraglide/messages';

	let {
		value = $bindable(),
		onValueChange
	}: {
		value?: string;
		onValueChange?: (value: string) => void;
	} = $props();

	const items = [Period.Hour, Period.Day, Period.Month, Period.Year];

	const vnstatLabels = {
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

	const labels = $derived.by(() => ({
		[Period.Hour]: vnstatLabels.hours,
		[Period.Day]: vnstatLabels.days,
		[Period.Month]: vnstatLabels.months,
		[Period.Year]: vnstatLabels.years
	}));
</script>

<ToggleGroup.Root
	type="single"
	bind:value
	variant="outline"
	{onValueChange}
	class="sticky top-2 z-10 bg-white shadow-lg dark:bg-[unset]"
>
	{#each items as p (p)}
		<ToggleGroup.Item class="cursor-pointer px-4" value={p}
			>{capitalize(labels[p])}</ToggleGroup.Item
		>
	{/each}
</ToggleGroup.Root>
