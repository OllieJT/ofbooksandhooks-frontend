<script lang="ts">
	import type { THEME_COLOR } from "@inqling/components/types";

	export let icon: ICON | undefined;
	export let theme: THEME_COLOR = "mono";
</script>

{#if icon}
	<div>
		{#if theme === "primary"}
			<span
				class="inline-flex rounded-lg bg-primary-50 p-3 text-primary-700 ring-4 ring-white"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "secondary"}
			<span
				class="inline-flex rounded-lg p-3 ring-4 ring-white bg-secondary-50 text-secondary-700"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "red"}
			<span class="inline-flex rounded-lg p-3 ring-4 ring-white bg-red-50 text-red-700">
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "yellow"}
			<span
				class="inline-flex rounded-lg p-3 ring-4 ring-white bg-yellow-50 text-yellow-700"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "green"}
			<span
				class="inline-flex rounded-lg p-3 ring-4 ring-white bg-green-50 text-green-700"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "blue"}
			<span class="inline-flex rounded-lg p-3 ring-4 ring-white bg-blue-50 text-blue-700">
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "purple"}
			<span
				class="inline-flex rounded-lg p-3 ring-4 ring-white bg-purple-50 text-purple-700"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else if theme === "pink"}
			<span class="inline-flex rounded-lg p-3 ring-4 ring-white bg-pink-50 text-pink-700">
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{:else}
			<span
				class="inline-flex rounded-lg p-3 ring-4 ring-white bg-mono-100 text-mono-700"
			>
				<svelte:component this={icon} class="h-6 w-6" />
			</span>
		{/if}
	</div>
{/if}
