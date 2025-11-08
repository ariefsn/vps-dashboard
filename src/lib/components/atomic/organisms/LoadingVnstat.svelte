<script>
	import LoadingInterface from '../molecules/LoadingInterface.svelte';
	import LoadingPieChart from '../molecules/LoadingPieChart.svelte';
	import LoadingToggle from '../molecules/LoadingToggle.svelte';
</script>

<!-- <div class="w-full">
	<LoadingToggle />
	<div class="flex gap-4">
		<div class="flex flex-col gap-4">
			{#each ['total', 'estimated'] as loadingMain, i ([loadingMain, i].join('-'))}
				<LoadingPieChart />
			{/each}
		</div>
		<div class="flex w-full flex-col gap-4">
			{#each ['interface1', 'interface2'] as loadingInterface, i ([loadingInterface, i].join('-'))}
				<LoadingInterface />
			{/each}
		</div>
	</div>
</div> -->

<LoadingToggle />
<div class="flex w-full flex-col gap-4 md:flex-row">
	<div class="flex flex-col gap-4">
		{#each ['total', 'estimated'] as loadingMain, i ([loadingMain, i].join('-'))}
			<LoadingPieChart />
		{/each}
	</div>

	<div class="flex h-fit w-full flex-col gap-4">
		<div class="flex w-full flex-col gap-4">
			{#each ['interface1', 'interface2'] as loadingInterface, i ([loadingInterface, i].join('-'))}
				<LoadingInterface />
			{/each}
		</div>
	</div>
</div>
