<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import type { ModalProps } from '$lib/models';
	import { cn } from '$lib/utils';

	let {
		children,
		class: classNames,
		description,
		footer,
		onOpenChange,
		open = $bindable(false),
		title,
		trigger
	}: ModalProps = $props();

	const isHeaderExists = $derived.by(() => !!title || !!description);
</script>

<Dialog.Root
	{open}
	onOpenChangeComplete={(_open) => {
		open = _open;
		onOpenChange?.(_open);
	}}
>
	{#if trigger}
		<Dialog.Trigger>
			{#snippet child({ props })}
				<button {...props}>
					{#if typeof trigger === 'string'}
						{trigger}
					{:else}
						{@render trigger?.()}
					{/if}
				</button>
			{/snippet}
		</Dialog.Trigger>
	{/if}
	<Dialog.Content class={cn('sm:max-w-[425px]', classNames)}>
		{#if isHeaderExists}
			<Dialog.Header>
				{#if title}
					<Dialog.Title>{title}</Dialog.Title>
				{/if}
				{#if description}
					<Dialog.Description>
						{description}
					</Dialog.Description>
				{/if}
			</Dialog.Header>
		{/if}

		{@render children?.()}

		{#if footer}
			<Dialog.Footer>
				{@render footer?.()}
			</Dialog.Footer>
		{/if}
	</Dialog.Content>
</Dialog.Root>
