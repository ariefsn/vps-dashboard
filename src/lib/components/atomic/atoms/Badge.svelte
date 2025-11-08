<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { BadgeProps } from '$lib/models';
	import { cn } from '$lib/utils';

	let { children, class: className, type, variant = 'outline' }: BadgeProps = $props();
</script>

<Badge
	{variant}
	class={cn(
		{
			'bg-red-500 text-white': type === 'error',
			'bg-blue-500 text-white': type === 'info',
			'bg-amber-500 text-white': type === 'warning',
			'bg-green-500 text-white': type === 'success'
		},
		className
	)}
>
	{#if children}
		{#if typeof children === 'string'}
			{children}
		{:else}
			{@render children?.()}
		{/if}
	{/if}
</Badge>
