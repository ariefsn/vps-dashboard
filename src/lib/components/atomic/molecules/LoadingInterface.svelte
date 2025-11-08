<script>
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Card from '../atoms/Card.svelte';
</script>

<Card>
	<div class="grid grid-cols-12 gap-8">
		<div class="col-span-3">
			<Skeleton class="h-[240px] w-[240px] rounded-full" />
		</div>
		<div class="col-span-9">
			<Skeleton class="h-full w-full" />
		</div>
	</div>
</Card>
