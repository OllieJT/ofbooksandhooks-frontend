<script lang="ts">
	import { urlFor } from "$util/handle-sanity-image";

	import type { BlockProps } from "@portabletext/svelte";

	export let portableText: BlockProps<Sanity.Schema.Picture>;

	const width = 1280;
	const height = 720;
	$: picture = portableText.block;
	$: src = urlFor(picture).width(width).height(height).fit("max").url();
	$: layout = picture.layout;
</script>

<img
	class="h-auto max-w-full object-contain object-center"
	class:inline-block={layout != "block"}
	class:block={layout === "block"}
	class:float-right={layout === "inline-right"}
	class:float-left={layout === "inline-left"}
	{src}
	alt={picture.alt}
	{width}
	{height}
/>
