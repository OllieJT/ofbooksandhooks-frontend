<script lang="ts">
	import type { MarkProps } from "@portabletext/svelte";

	export let portableText: MarkProps<Sanity.Keyed<Sanity.Schema.LinkEmail>>;

	$: href = `mailto:${portableText.mark.email}`;
</script>

<a {href} class="">
	<slot />
</a>
