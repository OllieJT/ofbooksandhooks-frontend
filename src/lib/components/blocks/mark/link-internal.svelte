<script lang="ts">
	import type { LinkInternal } from "$lib/api/sanity/schema";
	import type * as Schema from "$lib/api/sanity/schema";
	import { resolveUrl } from "$lib/util/resolve-url";
	import type { MarkProps } from "@portabletext/svelte";

	type Link = Omit<LinkInternal, "reference"> & {
		reference:
			| Schema.Article
			| Schema.Collection
			| Schema.Linkpage
			| Schema.Person
			| Schema.Homepage;
	};

	export let portableText: MarkProps<Link>;
	$: type = portableText.mark.reference._type;
	$: slug =
		portableText.mark.reference._type != "linkpage" &&
		portableText.mark.reference._type != "homepage"
			? portableText.mark.reference.slug.current
			: null;

	$: href = resolveUrl({ slug, type });
</script>

<a {href}>
	<slot />
</a>
