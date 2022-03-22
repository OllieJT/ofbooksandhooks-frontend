<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineImage } from "$lib/api/sanity/schema";
	import { urlFor } from "$lib/api/sanity/client";

	export let portableText: BlockProps<InlineImage>;
	$: image = portableText.block;
	$: src = urlFor(image).width(1200).height(900).url();
</script>

{#if image.alt}
	<figure>
		<img class="w-full rounded-lg" {src} alt={image.alt || ""} width="1200" height="900" />
		<figcaption>{image.alt}</figcaption>
	</figure>
{:else}
	<img class="w-full rounded-lg" {src} alt={image.alt || ""} width="1200" height="900" />
{/if}
