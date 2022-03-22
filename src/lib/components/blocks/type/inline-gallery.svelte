<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineGallery } from "$lib/api/sanity/schema";
	import { urlFor } from "$lib/api/sanity/client";

	export let portableText: BlockProps<InlineGallery>;
	$: gallery = portableText.block;
	$: images = gallery.images || [];
</script>

<section class="not-prose">
	<ul class="flex flex-row flex-wrap items-stretch justify-center gap-1">
		{#each images as image}
			{@const src = urlFor(image).width(1200).height(900).url()}
			<li>
				<img
					class="w-full rounded-lg"
					{src}
					alt={image.alt || ""}
					width="1200"
					height="900"
				/>
			</li>
		{/each}
	</ul>
</section>
