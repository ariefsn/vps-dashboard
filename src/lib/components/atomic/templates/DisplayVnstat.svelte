<script lang="ts">
	import { Period, type VnstatResult } from '$lib/graphql/generated';
	import { formatBytes } from '$lib/helper/common';
	import { m } from '$lib/paraglide/messages';
	import BarChartTraffics from '../atoms/BarChartTraffics.svelte';
	import Card from '../atoms/Card.svelte';
	import PieChart from '../atoms/PieChart.svelte';

	let { data, period, dateFormat }: { data: VnstatResult; period: Period; dateFormat: string } =
		$props();

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

	const buildTotalData = ({ rx, tx }: { rx?: number; tx?: number }) => [
		{
			label: 'Rx',
			value: rx ?? 0,
			bgColor: 'green',
			tooltip: {
				title: vnstatLabels.received,
				items: [
					{
						label: 'Rx',
						value: formatBytes(rx ?? 0)
					}
				]
			}
		},
		{
			label: 'Tx',
			value: tx ?? 0,
			bgColor: 'red',
			tooltip: {
				title: vnstatLabels.transmitted,
				items: [
					{
						label: 'Tx',
						value: formatBytes(tx ?? 0)
					}
				]
			}
		}
	];

	const totalData = $derived.by(() => buildTotalData({ rx: data?.total?.rx, tx: data?.total?.tx }));

	const estimatedData = $derived.by(() =>
		buildTotalData({ rx: data?.estimated?.rx, tx: data?.estimated?.tx })
	);
</script>

<div class="flex w-full flex-col gap-4 md:flex-row">
	<div class="flex flex-col gap-4">
		<Card class="shadow-lg" title={vnstatLabels.total}>
			<div class="flex w-full justify-center">
				<PieChart
					data={totalData}
					totalNumber={formatBytes(data.total.tx + data.total.rx)}
					label={(v) => {
						return {
							Rx: vnstatLabels.received,
							Tx: vnstatLabels.transmitted
						}[v.label];
					}}
				/>
			</div>
		</Card>

		<Card class="shadow-lg" title={vnstatLabels.estimated}>
			<div class="flex w-full justify-center">
				<PieChart
					data={estimatedData}
					totalNumber={formatBytes(data.estimated.tx + data.estimated.rx)}
					label={(v) => {
						return {
							Rx: vnstatLabels.received,
							Tx: vnstatLabels.transmitted
						}[v.label];
					}}
				/>
			</div>
		</Card>
	</div>

	<div class="flex h-fit w-full flex-col gap-4">
		{#each data.interfaces as itf, i ([itf.name, i.toString()].join('-'))}
			<Card title={itf.name} class="w-full">
				<div class="grid grid-cols-12 gap-8">
					<div class="col-span-12 lg:col-span-3">
						<div class="flex w-full justify-center">
							<PieChart
								data={buildTotalData({ rx: itf.total.rx, tx: itf.total.tx })}
								totalNumber={formatBytes(itf.total.tx + itf.total.rx)}
								label={(v) => {
									return {
										Rx: vnstatLabels.received,
										Tx: vnstatLabels.transmitted
									}[v.label];
								}}
							/>
						</div>
					</div>
					<div class="col-span-12 h-[300px] rounded p-4 lg:col-span-9 lg:h-auto">
						{#key [period, dateFormat, itf.traffics.length].join('-')}
							<BarChartTraffics data={itf.traffics} {dateFormat} />
						{/key}
					</div>
				</div>
			</Card>
		{/each}
	</div>
</div>
