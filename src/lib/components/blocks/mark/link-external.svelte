<script lang="ts">
	import type { LinkExternal } from "$lib/api/sanity/schema";

	import type { MarkProps } from "@portabletext/svelte";

	export let portableText: MarkProps<LinkExternal>;

	$: href = portableText.mark.url;
</script>

<a {href} target="_blank">
	<slot />
</a>
