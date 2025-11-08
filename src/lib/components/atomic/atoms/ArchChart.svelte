<script lang="ts">
	import type { ArchChartProps } from '$lib/models';
	import { cn } from '$lib/utils';
	import { Arc, Chart, Layer, Text } from 'layerchart';

	let { value = $bindable(0), segments = $bindable(100) }: ArchChartProps = $props();
</script>

<div class="h-[200px] w-[200px] overflow-auto p-4">
	<Chart>
		<Layer type="svg" center>
			{#each { length: segments } as s, segmentIndex ([s, segmentIndex].join('-'))}
				{@const segmentAngle = (2 * Math.PI) / segments}
				<Arc
					startAngle={segmentIndex * segmentAngle}
					endAngle={(segmentIndex + 1) * segmentAngle}
					innerRadius={-20}
					cornerRadius={4}
					padAngle={0.02}
					class={cn(
						(segmentIndex / segments) * 100 < (value ?? 0)
							? 'fill-success-300'
							: 'fill-success-500/10'
					)}
				/>
			{/each}

			<Text
				value={Math.round(value ?? 0)}
				textAnchor="middle"
				verticalAnchor="middle"
				dy={16}
				class="text-6xl tabular-nums"
			/>
		</Layer>
	</Chart>
</div>
