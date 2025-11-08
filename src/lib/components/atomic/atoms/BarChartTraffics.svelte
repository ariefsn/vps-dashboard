<script lang="ts">
	import type { Day } from '$lib/graphql/generated';
	import { formatBytes, formatDate, vnstatLabels } from '$lib/helper';
	import { BarChart, Tooltip } from 'layerchart';

	let { data = [], dateFormat = '' }: { data?: Day[]; dateFormat?: string } = $props();
</script>

<BarChart
	{data}
	x={(d) => formatDate(new Date((d.timestamp ?? 0) * 1000), dateFormat)}
	series={[
		{
			key: 'rx',
			color: 'green',
			label: vnstatLabels.received
		},
		{
			key: 'tx',
			color: 'red',
			label: vnstatLabels.transmitted
		}
	]}
	seriesLayout="group"
	legend={{
		placement: 'bottom'
	}}
	props={{
		xAxis: {
			format: 'none',
			tickLabelProps: {
				rotate: 315,
				textAnchor: 'end',
				class: 'fill-black dark:fill-white font-semibold'
			}
		},
		yAxis: {
			format: (d: number) => formatBytes(d),
			grid: {
				class: 'stroke-primary/10'
			}
		},
		highlight: {
			area: {
				fillOpacity: 0.1
			}
		},
		tooltip: {
			header: { format: 'none' }
		}
	}}
>
	{#snippet tooltip()}
		<Tooltip.Root>
			{#snippet children({ data }: { data: Day })}
				<Tooltip.Header value={formatDate(new Date((data.timestamp ?? 0) * 1000), dateFormat)} />
				<Tooltip.List>
					<Tooltip.Item label={vnstatLabels.received} value={formatBytes(data.rx)} />
					<Tooltip.Item label={vnstatLabels.transmitted} value={formatBytes(data.tx)} />
					<Tooltip.Item label={vnstatLabels.total} value={formatBytes(data.rx + data.tx)} />
				</Tooltip.List>
			{/snippet}
		</Tooltip.Root>
	{/snippet}
</BarChart>
