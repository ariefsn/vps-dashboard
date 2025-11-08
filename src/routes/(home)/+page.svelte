<script lang="ts">
	import { goto } from '$app/navigation';
	import TogglePeriod from '$lib/components/atomic/atoms/TogglePeriod.svelte';
	import LoadingVnstat from '$lib/components/atomic/organisms/LoadingVnstat.svelte';
	import DisplayVnstat from '$lib/components/atomic/templates/DisplayVnstat.svelte';
	import { VnstatApi } from '$lib/graphql';
	import { Period, type VnstatResult } from '$lib/graphql/generated';
	import { gqlClient } from '$lib/graphql/gqlClient';
	import { parseGraphqlError, showNotification } from '$lib/helper/index.js';
	import { onDestroy, onMount } from 'svelte';

	let { data } = $props();

	let subscription = $state<{ unsubscribe: () => void } | undefined>(undefined);
	let result = $state<VnstatResult | undefined>(undefined);
	let period = $state<Period>(data.period as Period);
	let isLoading = $state(true);

	const gql = gqlClient({
		url: data.url,
		token: data.token,
		timestamp: data.timestamp
	});
	const vnstatApi = new VnstatApi(gql);

	const onSubscribe = () => {
		result = undefined;
		isLoading = true;
		if (subscription) {
			subscription.unsubscribe();
		}

		subscription = vnstatApi
			.stream({
				period
			})
			.subscribe((res) => {
				const data = res?.data?.vnstat;
				if (isLoading) {
					isLoading = false;
				}

				if (!data) {
					const error = parseGraphqlError(res);
					showNotification(error, { type: 'error' });
					return;
				}

				if (data.message) {
					showNotification(data.message, { type: 'error' });
					return;
				}

				result = data?.data ? (data.data as VnstatResult) : undefined;
			});
	};

	onMount(() => {
		onSubscribe();
	});

	const dateFormat = $derived.by(() => {
		return (
			{
				[Period.Year]: 'YYYY',
				[Period.Month]: 'YYYY-MMM',
				[Period.Day]: 'YYYY-MMM-DD',
				[Period.Hour]: 'HH:mm'
			} as Record<Period, string>
		)[period];
	});

	onDestroy(() => {
		subscription?.unsubscribe();
	});
</script>

{#if isLoading}
	<LoadingVnstat />
{/if}

{#if result}
	<TogglePeriod
		bind:value={period}
		onValueChange={(v) => {
			goto('/?period=' + v, {});
			onSubscribe();
		}}
	/>

	<DisplayVnstat data={result} {dateFormat} {period} />
{/if}
