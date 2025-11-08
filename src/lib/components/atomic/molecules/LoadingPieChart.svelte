<script>
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Card from '../atoms/Card.svelte';
</script>

<Card>
	<div class="flex w-full justify-center">
		<Skeleton class="h-[240px] w-[240px] rounded-full" />
	</div>
</Card>
