<script lang="ts">
	import type { BlockComponent } from "@portabletext/svelte/rendererTypes";

	export let portableText: BlockComponent;
	$: style = portableText.block.style;
</script>

{#if style === "h1"}
	<h1><slot /></h1>
{:else if style === "h2"}
	<h2><slot /></h2>
{:else if style === "h3"}
	<h3><slot /></h3>
{:else if style === "h4"}
	<h4><slot /></h4>
{:else if style === "h5"}
	<h5 class="text-mono-900 font-semibold"><slot /></h5>
{:else}
	<h6 class="text-mono-900 uppercase font-semibold tracking-widest"><slot /></h6>
{/if}
