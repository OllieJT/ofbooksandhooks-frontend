<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineHighlight } from "$lib/api/sanity/schema";
	import FeaturedContent from "$lib/components/featured-content/featured-content.svelte";

	export let portableText: BlockProps<InlineHighlight>;
	$: highlight = portableText.block;
</script>

<FeaturedContent
	title={highlight.title}
	theme={highlight.theme || "mono"}
	content={highlight.content}
	type={highlight.type}
/>
