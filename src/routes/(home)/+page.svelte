<script lang="ts">
	import { browser } from '$app/environment';
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
		logger,
		parseGraphqlError,
		showNotification,
		sleep
	} from '$lib/helper/index.js';
	import { m } from '$lib/paraglide/messages.js';
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

	const apis = () => {
		const gql = gqlClient({
			url: data.url,
			token: data.token,
			timestamp: data.timestamp
		});

		return {
			vnstat: new VnstatApi(gql),
			fastfetch: new FastfetchApi(gql)
		};
	};

	const onSubscribeVnstat = async () => {
		vnstat.data = undefined;
		vnstat.isLoading = true;
		vnstat.subscription?.unsubscribe();

		await sleep(100);

		vnstat.subscription = apis()
			.vnstat.stream({
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

		logger.info({ event: 'onSubscribeVnstat' }, 'Subscription started');
	};

	const onSubscribeFastfetch = async () => {
		fastfetch.data = undefined;
		fastfetch.isLoading = true;
		fastfetch.subscription?.unsubscribe();

		await sleep(100);

		fastfetch.subscription = apis()
			.fastfetch.stream({
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

		logger.info({ event: 'onSubscribeFastfetch' }, 'Subscription started');
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
		if (!browser) return;
		vnstat.subscription?.unsubscribe();
		fastfetch.subscription?.unsubscribe();
		logger.info({ event: 'OnDestroy' }, 'Subscription closed');
	});

	const ff = $derived.by(() => ({
		title: fastfetch.data?.title,
		host: fastfetch.data?.host,
		os: fastfetch.data?.os,
		kernel: fastfetch.data?.kernel,
		uptime: fastfetch.data?.uptime,
		shell: fastfetch.data?.shell,
		display: fastfetch.data?.display,
		de: fastfetch.data?.de,
		wm: fastfetch.data?.wm,
		cursor: fastfetch.data?.cursor,
		font: fastfetch.data?.font,
		terminal: fastfetch.data?.terminal,
		terminalFont: fastfetch.data?.terminalFont,
		cpu: fastfetch.data?.cpu,
		gpu: fastfetch.data?.gpu,
		mem: fastfetch.data?.memory,
		swap: fastfetch.data?.swap,
		disk: fastfetch.data?.disk,
		localIp: fastfetch.data?.localIp,
		battery: fastfetch.data?.battery,
		power: fastfetch.data?.powerAdapter,
		locale: fastfetch.data?.locale
	}));

	const buildSpecValue = (...values: (string | undefined)[]): string => {
		return values.filter(Boolean).join(' ');
	};

	const spec = $derived.by(
		() =>
			[
				{
					label: m['fastfetch.hostname'](),
					value: buildSpecValue(`${ff.title?.hostName}`)
				},
				{
					label: m['fastfetch.os'](),
					value: buildSpecValue(
						`${ff.os?.name}`,
						`${ff.os?.codename}`,
						`${ff.os?.version}`,
						`${ff.kernel?.architecture}`
					)
				},
				{
					label: m['fastfetch.kernel'](),
					value: buildSpecValue(`${ff.kernel?.name}`, `${ff.kernel?.release}`)
				},
				{
					label: m['fastfetch.uptime'](),
					value: formatUptime((ff.uptime?.uptime ?? 0) / 1000)
				},
				{
					label: m['fastfetch.shell'](),
					value: buildSpecValue(`${ff.shell?.prettyName}`, `${ff.shell?.version}`)
				},
				{
					label: m['fastfetch.display'](),
					value: ff.display?.map((d) =>
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
					label: m['fastfetch.de'](),
					value: buildSpecValue(`${ff.de?.prettyName}`)
				},
				{
					label: m['fastfetch.wm'](),
					value: buildSpecValue(`${ff.wm?.prettyName}`)
				},
				{
					label: m['fastfetch.font'](),
					value: ff.font?.fonts?.map((f) => buildSpecValue(f ?? ''))
				},
				{
					label: m['fastfetch.cursor'](),
					value: buildSpecValue(
						`${ff.cursor?.theme}`,
						ff.cursor?.size ? `(${ff.cursor?.size})` : ''
					)
				},
				{
					label: m['fastfetch.terminal'](),
					value: buildSpecValue(`${ff.terminal?.prettyName}`)
				},
				{
					label: m['fastfetch.cpu'](),
					value: buildSpecValue(
						`${ff.cpu?.cpu}`,
						ff.cpu?.cores?.physical ? `(${ff.cpu?.cores?.physical})` : '',
						ff.cpu?.frequency?.base
							? `@ ${formatHz(ff.cpu?.frequency?.base ?? ff.cpu?.frequency?.max ?? 0)}`
							: ''
					)
				},
				{
					label: m['fastfetch.gpu'](),
					value: ff.gpu?.map((g) =>
						buildSpecValue(
							`${g.name}`,
							g.coreCount ? `(${g.coreCount})` : '',
							g.frequency ? `@ ${formatHz(g.frequency ?? 0)}` : '',
							g.type ? `[${g.type}]` : ''
						)
					)
				},
				{
					label: m['fastfetch.memory'](),
					value: `${formatBytes(ff.mem?.used ?? 0)} / ${formatBytes(ff.mem?.total ?? 0)} (${(((ff.mem?.used ?? 0) / (ff.mem?.total ?? 1)) * 100).toFixed(0)}%)`
				},
				{
					label: m['fastfetch.swap'](),
					value: ff.swap?.map(
						(s) =>
							`${formatBytes(s?.used ?? 0)} / ${formatBytes(s?.total ?? 0)} (${(((s?.used ?? 0) / (s?.total ?? 1)) * 100).toFixed(0)}%)`
					)
				},
				{
					label: m['fastfetch.disk'](),
					value: ff.disk
						?.filter((d) => d.mountpoint === '/')
						.map(
							(d) =>
								`${d.name} (${d.mountpoint}) ${formatBytes(d.bytes?.used ?? 0)} / ${formatBytes(d.bytes?.total ?? 0)} (${(((d.bytes?.used ?? 0) / (d.bytes?.total ?? 1)) * 100).toFixed(0)}%)`
						)
				},
				{
					label: m['fastfetch.local_ip'](),
					value: ff.localIp?.map((i) => `${i.ipv4} (${i.name})`)
				},
				{
					label: m['fastfetch.battery'](),
					value: ff.battery?.map((b) => `${b.capacity}% [${b.status}] (${b.modelName})`)
				},
				{
					label: m['fastfetch.power_adapter'](),
					value: ff.power?.map((p) => `${p.name} (${p.manufacturer})`)
				},
				{
					label: m['fastfetch.locale'](),
					value: ff.locale
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
			`${ff.host?.name}`,
			`${ff.host?.version}`,
			ff.host?.vendor ? `[${ff.host?.vendor}]` : ''
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
