<script lang="ts">
	import { page } from '$app/state';
	import LangSwitcher from '$lib/components/atomic/atoms/LangSwitcher.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
	import { showNotification } from '$lib/helper';
	import { Moon, SunMoon } from '@lucide/svelte';
	import { mode, ModeWatcher, toggleMode } from 'mode-watcher';
	import { deepMerge, MetaTags } from 'svelte-meta-tags';
	import '../app.css';

	let { data, children } = $props();
	let metaTags = $derived(deepMerge(data.baseMetaTags, page.data.pageMetaTags));

	$effect(() => {
		if (data.flash) {
			showNotification(data.flash.message, {
				type: data.flash.type
			});
		}
	});

	let isDark = $derived(mode.current === 'dark');
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<MetaTags {...metaTags} />

<Toaster richColors />

<ModeWatcher />

<div class="flex flex-col items-center justify-center p-4">
	{@render children?.()}
	<span class="fixed right-4 bottom-4 flex h-fit w-fit gap-2">
		<LangSwitcher />
		<button onclick={toggleMode}>
			{#if isDark}
				<SunMoon class="h-6 w-6" />
			{:else}
				<Moon class="h-6 w-6" />
			{/if}
		</button>
	</span>
</div>
