<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { Period } from '$lib/graphql/generated';
	import { capitalize, vnstatLabels } from '$lib/helper';

	let {
		value = $bindable(),
		onValueChange
	}: {
		value?: string;
		onValueChange?: (value: string) => void;
	} = $props();

	const items = [Period.Hour, Period.Day, Period.Month, Period.Year];

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
