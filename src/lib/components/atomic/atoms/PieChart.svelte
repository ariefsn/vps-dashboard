<script lang="ts">
	import type { PieChartItem, PieChartProps } from '$lib/models';
	import { cn } from '$lib/utils';
	import { format } from '@layerstack/utils';
	import { sum } from '@layerstack/utils/array';
	import { PieChart, Text, Tooltip } from 'layerchart';

	let {
		data = $bindable([]),
		label,
		totalNumber,
		totalPlaceholder = 'Total',
		class: className
	}: PieChartProps = $props();
</script>

<div class={cn('h-[240px] w-[240px] overflow-auto rounded-sm p-4', className)}>
	<PieChart
		{data}
		key="label"
		value="value"
		innerRadius={-20}
		cornerRadius={5}
		padAngle={0.02}
		renderContext="svg"
		legend
		{label}
		c="bgColor"
	>
		{#snippet aboveMarks()}
			<Text
				value={totalNumber ?? format(sum(data, (d) => d.value) ?? 0)}
				textAnchor="middle"
				verticalAnchor="middle"
				class="text-xl"
				dy={4}
			/>
			<Text
				value={totalPlaceholder}
				textAnchor="middle"
				verticalAnchor="middle"
				class="fill-surface-content/50 text-sm dark:fill-white"
				dy={26}
			/>
		{/snippet}

		{#snippet tooltip()}
			<Tooltip.Root>
				{#snippet children({ data }: { data: PieChartItem })}
					{#if data.tooltip?.title}
						<Tooltip.Header value={data?.tooltip?.title} />
					{/if}
					<Tooltip.List>
						{#if !data.tooltip?.items?.length}
							<Tooltip.Item label={data.label} value={data.value} />
						{:else}
							{#each data.tooltip.items as t, i ([data.label, t.label, i.toString()].join(''))}
								<Tooltip.Item label={t.label} value={t.value} />
							{/each}
						{/if}
					</Tooltip.List>
				{/snippet}
			</Tooltip.Root>
		{/snippet}
	</PieChart>
</div>
