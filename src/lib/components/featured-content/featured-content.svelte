<script lang="ts">
	import type { ContentMin } from "$lib/api/sanity/schema";

	import type { THEME_COLOR } from "@inqling/components/types";
	import PortableText from "../blocks/portable-text.svelte";
	import FeaturedContentFill from "./part/featured-content-fill.svelte";
	import FeaturedContentOutline from "./part/featured-content-outline.svelte";

	export let title: string;
	export let theme: THEME_COLOR;
	export let type: "fill" | "outline";
	export let content: ContentMin | undefined;
</script>

<svelte:component
	this={type === "outline" ? FeaturedContentOutline : FeaturedContentFill}
	{theme}
	class="not-prose rounded-lg p-6"
>
	<h4 class="my-0 text-lg font-semibold leading-relaxed">{title}</h4>

	{#if content}
		<PortableText blocks={content} />
	{/if}
</svelte:component>
