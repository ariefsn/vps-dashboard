<script lang="ts">
	import type { LinkProps } from '$lib/models';
	import { cn } from '$lib/utils';

	let { href, class: className, children, target }: LinkProps = $props();
</script>

<a {href} class={cn('underline', className)} {target}>
	{@render children?.()}
</a>
