<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/atomic/atoms/Modal.svelte';
	import TogglePeriod from '$lib/components/atomic/atoms/TogglePeriod.svelte';
	import LoadingVnstat from '$lib/components/atomic/organisms/LoadingVnstat.svelte';
	import DisplayVnstat from '$lib/components/atomic/templates/DisplayVnstat.svelte';
	import { FastfetchApi, VnstatApi } from '$lib/graphql';
	import { Period, type FastfetchResult, type VnstatResult } from '$lib/graphql/generated';
	import { gqlClient } from '$lib/graphql/gqlClient';
	import {
		formatBytes,
		formatHz,
		formatUptime,
		getDisplaySizeInInches,
		parseGraphqlError,
		showNotification,
		sleep
	} from '$lib/helper/index.js';
	import { BadgeInfo } from '@lucide/svelte';
	import { onDestroy, onMount } from 'svelte';

	type Subscription = { unsubscribe: () => void };
	type SubscriptionState<T> = {
		data?: T;
		isLoading: boolean;
		subscription?: Subscription;
	};

	let { data } = $props();

	let vnstat = $state<SubscriptionState<VnstatResult>>({
		isLoading: true
	});
	let fastfetch = $state<SubscriptionState<FastfetchResult>>({
		isLoading: true
	});
	let period = $state<Period>(data.period as Period);
	let showDeviceInfo = $state<boolean>(false);

	const apis = $derived.by(() => {
		const gql = gqlClient({
			url: data.url,
			token: data.token,
			timestamp: data.timestamp
		});

		return {
			vnstat: new VnstatApi(gql),
			fastfetch: new FastfetchApi(gql)
		};
	});

	const onSubscribeVnstat = async () => {
		vnstat.data = undefined;
		vnstat.isLoading = true;
		vnstat.subscription?.unsubscribe();

		await sleep(100);

		vnstat.subscription = apis.vnstat
			.stream({
				period,
				// 10 minutes
				interval: 10 * 60 * 1000
			})
			.subscribe((res) => {
				const data = res?.data?.vnstat;
				if (vnstat.isLoading) {
					vnstat.isLoading = false;
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

				vnstat.data = data?.data ? (data.data as VnstatResult) : undefined;
			});
	};

	const onSubscribeFastfetch = async () => {
		fastfetch.data = undefined;
		fastfetch.isLoading = true;
		fastfetch.subscription?.unsubscribe();

		await sleep(100);

		fastfetch.subscription = apis.fastfetch
			.stream({
				// 30 minutes
				interval: 30 * 60 * 1000
			})
			.subscribe((res) => {
				const data = res?.data?.fastfetch;
				if (fastfetch.isLoading) {
					fastfetch.isLoading = false;
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

				fastfetch.data = data?.data ? (data.data as FastfetchResult) : undefined;
			});
	};

	onMount(() => {
		onSubscribeVnstat();
		onSubscribeFastfetch();
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
		vnstat.subscription?.unsubscribe();
		fastfetch.subscription?.unsubscribe();
	});

	const title = $derived.by(() => fastfetch.data?.title);
	const host = $derived.by(() => fastfetch.data?.host);
	const os = $derived.by(() => fastfetch.data?.os);
	const kernel = $derived.by(() => fastfetch.data?.kernel);
	const uptime = $derived.by(() => fastfetch.data?.uptime);
	const shell = $derived.by(() => fastfetch.data?.shell);
	const display = $derived.by(() => fastfetch.data?.display);
	const de = $derived.by(() => fastfetch.data?.de);
	const wm = $derived.by(() => fastfetch.data?.wm);
	const cursor = $derived.by(() => fastfetch.data?.cursor);
	const font = $derived.by(() => fastfetch.data?.font);
	const terminal = $derived.by(() => fastfetch.data?.terminal);
	const cpu = $derived.by(() => fastfetch.data?.cpu);
	const gpu = $derived.by(() => fastfetch.data?.gpu);
	const mem = $derived.by(() => fastfetch.data?.memory);
	const swap = $derived.by(() => fastfetch.data?.swap);
	const disk = $derived.by(() => fastfetch.data?.disk);
	const localIp = $derived.by(() => fastfetch.data?.localIp);
	const battery = $derived.by(() => fastfetch.data?.battery);
	const power = $derived.by(() => fastfetch.data?.powerAdapter);
	const locale = $derived.by(() => fastfetch.data?.locale);

	setTimeout(() => {
		console.log('display', display);
		console.log('gpu', gpu);
		console.log('cpu', cpu);
	}, 1000);

	const buildSpecValue = (...values: string[]): string => {
		return values.filter((v) => v).join(' ');
	};

	const spec = $derived.by(
		() =>
			[
				{
					label: 'Hostname',
					value: buildSpecValue(`${title?.hostName}`)
				},
				{
					label: 'OS',
					value: buildSpecValue(
						`${os?.name}`,
						`${os?.codename}`,
						`${os?.version}`,
						`${kernel?.architecture}`
					)
				},
				{
					label: 'Kernel',
					value: buildSpecValue(`${kernel?.name}`, `${kernel?.release}`)
				},
				{
					label: 'Uptime',
					value: formatUptime((uptime?.uptime ?? 0) / 1000)
				},
				{
					label: 'Shell',
					value: buildSpecValue(`${shell?.prettyName}`, `${shell?.version}`)
				},
				{
					label: 'Display',
					value: display?.map((d) =>
						buildSpecValue(
							`${d.name}`,
							`${d.output?.width}x${d.output?.height}`,
							(d.output?.refreshRate ?? 0) > 0 ? `@ ${d.output?.refreshRate}Hz` : '',
							getDisplaySizeInInches(d.physical?.width ?? 0, d.physical?.height ?? 0)
								? `in ${getDisplaySizeInInches(d.physical?.width ?? 0, d.physical?.height ?? 0)}`
								: '',
							d.type ? `[${d.type}]` : ''
						)
					)
				},
				{
					label: 'DE',
					value: buildSpecValue(`${de?.prettyName}`)
				},
				{
					label: 'WM',
					value: buildSpecValue(`${wm?.prettyName}`)
				},
				{
					label: 'Font',
					value: font?.fonts?.map((f) => buildSpecValue(f ?? ''))
				},
				{
					label: 'Cursor',
					value: buildSpecValue(`${cursor?.theme}`, cursor?.size ? `(${cursor?.size})` : '')
				},
				{
					label: 'Terminal',
					value: buildSpecValue(`${terminal?.prettyName}`)
				},
				{
					label: 'CPU',
					value: buildSpecValue(
						`${cpu?.cpu}`,
						cpu?.cores?.physical ? `(${cpu?.cores?.physical})` : '',
						cpu?.frequency?.base
							? `@ ${formatHz(cpu?.frequency?.base ?? cpu?.frequency?.max ?? 0)}`
							: ''
					)
				},
				{
					label: 'GPU',
					value: gpu?.map((g) =>
						buildSpecValue(
							`${g.name}`,
							g.coreCount ? `(${g.coreCount})` : '',
							g.frequency ? `@ ${formatHz(g.frequency ?? 0)}` : '',
							g.type ? `[${g.type}]` : ''
						)
					)
				},
				{
					label: 'Memory',
					value: `${formatBytes(mem?.used ?? 0)} / ${formatBytes(mem?.total ?? 0)} (${(((mem?.used ?? 0) / (mem?.total ?? 1)) * 100).toFixed(0)}%)`
				},
				{
					label: 'Swap',
					value: swap?.map(
						(s) =>
							`${formatBytes(s?.used ?? 0)} / ${formatBytes(s?.total ?? 0)} (${(((s?.used ?? 0) / (s?.total ?? 1)) * 100).toFixed(0)}%)`
					)
				},
				{
					label: 'Disk',
					value: disk
						?.filter((d) => d.mountpoint === '/')
						.map(
							(d) =>
								`${d.name} (${d.mountpoint}) ${formatBytes(d.bytes?.used ?? 0)} / ${formatBytes(d.bytes?.total ?? 0)} (${(((d.bytes?.used ?? 0) / (d.bytes?.total ?? 1)) * 100).toFixed(0)}%)`
						)
				},
				{
					label: 'Local IP',
					value: localIp?.map((i) => `${i.ipv4} (${i.name})`)
				},
				{
					label: 'Battery',
					value: battery?.map((b) => `${b.capacity}% [${b.status}] (${b.modelName})`)
				},
				{
					label: 'Power Adapter',
					value: power?.map((p) => `${p.name} (${p.manufacturer})`)
				},
				{
					label: 'Locale',
					value: locale
				}
			].filter((d) => {
				if (typeof d.value === 'string') return d.value.replaceAll('()', '').trim().length > 0;
				if (Array.isArray(d.value))
					return d.value.filter((v) => (v ?? '').trim().length > 0).length > 0;
				return d.value;
			}) as { label: string; value: string | string[] }[]
	);
</script>

{#if fastfetch.data}
	<Modal
		title={buildSpecValue(
			`${host?.name}`,
			`${host?.version}`,
			host?.vendor ? `[${host?.vendor}]` : ''
		)}
		open={showDeviceInfo}
		class="!max-w-3/4 md:!max-w-1/2"
	>
		<div>
			{#each spec as { label, value } (label)}
				<div class="flex w-full justify-between gap-4">
					<div class="w-40">{label}</div>
					<div class="flex w-full">
						<div class="mr-1">:</div>
						<div class="w-full text-left">
							{#if Array.isArray(value)}
								{#each value as val (val)}
									<div>
										{#if value.length > 1}-{/if}
										{val}
									</div>
								{/each}
							{:else}
								{value}
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</Modal>
{/if}

{#if vnstat.isLoading}
	<LoadingVnstat />
{/if}

{#if vnstat.data}
	<div class="mb-4 flex items-center gap-4">
		<TogglePeriod
			bind:value={period}
			onValueChange={(v) => {
				goto('/?period=' + v, {});
				onSubscribeVnstat();
			}}
		/>

		<button class="cursor-pointer" onclick={() => (showDeviceInfo = !showDeviceInfo)}>
			<BadgeInfo />
		</button>
	</div>

	<DisplayVnstat data={vnstat.data} {dateFormat} {period} />
{/if}
