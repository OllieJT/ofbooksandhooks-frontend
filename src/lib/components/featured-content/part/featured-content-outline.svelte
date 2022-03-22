<script lang="ts">
	import type { THEME_COLOR } from "@inqling/components/types";
	export let theme: THEME_COLOR;
</script>

{#if theme === "primary"}
	<section class="border-2 border-primary-500 bg-white text-primary-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "secondary"}
	<section class="border-2 bg-white border-secondary-500 text-secondary-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "red"}
	<section class="border-2 bg-white border-red-500 text-red-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "yellow"}
	<section class="border-2 bg-white border-yellow-500 text-yellow-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "green"}
	<section class="border-2 bg-white border-green-500 text-green-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "blue"}
	<section class="border-2 bg-white border-blue-500 text-blue-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "purple"}
	<section class="border-2 bg-white border-purple-500 text-purple-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "pink"}
	<section class="border-2 bg-white border-pink-500 text-pink-700 {$$props.class}">
		<slot />
	</section>
{:else}
	<section class="border-2 bg-white border-mono-500 text-mono-700 {$$props.class}">
		<slot />
	</section>
{/if}
