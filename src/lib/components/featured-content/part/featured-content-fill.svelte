<script lang="ts">
	import type { THEME_COLOR } from "@inqling/components/types";
	export let theme: THEME_COLOR;
</script>

{#if theme === "primary"}
	<section class="bg-primary-100 text-primary-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "secondary"}
	<section class="bg-secondary-100 text-secondary-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "red"}
	<section class="bg-red-100 text-red-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "yellow"}
	<section class="bg-yellow-100 text-yellow-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "green"}
	<section class="bg-green-100 text-green-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "blue"}
	<section class="bg-blue-100 text-blue-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "purple"}
	<section class="bg-purple-100 text-purple-700 {$$props.class}">
		<slot />
	</section>
{:else if theme === "pink"}
	<section class="bg-pink-100 text-pink-700 {$$props.class}">
		<slot />
	</section>
{:else}
	<section class="bg-mono-100 text-mono-700 {$$props.class}">
		<slot />
	</section>
{/if}
