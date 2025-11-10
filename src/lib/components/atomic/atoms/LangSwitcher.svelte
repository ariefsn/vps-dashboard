<script lang="ts">
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { getLocale, locales, setLocale } from '$lib/paraglide/runtime';
</script>

<ToggleGroup.Root
	type="single"
	value={getLocale()}
	variant="outline"
	onValueChange={(e) => setLocale(locales.find((l) => l === e) || 'en')}
>
	{#each locales as locale (locale)}
		<ToggleGroup.Item class="cursor-pointer" value={locale}>
			{locale.toUpperCase()}
		</ToggleGroup.Item>
	{/each}
</ToggleGroup.Root>
