<script lang="ts">
	import type { MarkProps } from "@portabletext/svelte";

	type LINK = Sanity.Schema.Link;

	export let portableText: MarkProps<Sanity.Keyed<LINK>>;

	function handleUrl(url: string) {
		if (url.includes("mtcthecontentagency.com")) {
			return url.split(".com")[1];
		}
		return url;
	}

	$: href = handleUrl(portableText.mark.href || "");

	function isExternal(path: string): boolean {
		if (path.startsWith("/")) return false;
		return true;
	}

	$: external = isExternal(href);
</script>

<a {href} target={external ? "_blank" : undefined}>
	<slot />
</a>
