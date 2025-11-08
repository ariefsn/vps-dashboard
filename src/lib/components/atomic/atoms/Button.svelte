<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { ButtonProps } from '$lib/models';
	import { cn } from '$lib/utils';

	let {
		class: className,
		type = 'button',
		children,
		onClick,
		variant,
		isDisabled,
		size
	}: ButtonProps = $props();
</script>

<Button
	{type}
	class={cn('cursor-pointer', className)}
	disabled={isDisabled}
	onclick={onClick}
	{variant}
	{size}
>
	{@render children?.()}
</Button>
