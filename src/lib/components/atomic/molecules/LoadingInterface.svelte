<script>
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Card from '../atoms/Card.svelte';
</script>

<Card>
	<div class="grid grid-cols-12 gap-8">
		<div class="col-span-12 md:col-span-3">
			<div class="flex w-full justify-center">
				<Skeleton class="h-[240px] w-[240px] rounded-full" />
			</div>
		</div>
		<div class="col-span-12 rounded p-4 md:col-span-9 md:h-auto">
			<div class="flex h-full w-full justify-center">
				<Skeleton class="h-[300px] w-full md:h-full" />
			</div>
		</div>
	</div>
</Card>
