<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { CardProps } from '$lib/models';

	let { class: className, title, description, children }: CardProps = $props();
</script>

<Card.Root class={className}>
	{#if title || description}
		<Card.Header>
			{#if title}
				<Card.Title class="text-xl">{title}</Card.Title>
			{/if}
			{#if description}
				<Card.Description>{description}</Card.Description>
			{/if}
		</Card.Header>
	{/if}
	<Card.Content>
		{@render children?.()}
	</Card.Content>
</Card.Root>
