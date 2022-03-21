<script lang="ts" context="module">
	export const load: Load = async () => {
		const res = await getCollectionList(1);
		const collections = res || [];
		return {
			props: {
				collections: collections.map(transformCollectionLink),
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import { getCollectionList } from "$lib/api/groq/collection-list";
	import FeaturedLinkList from "$lib/components/featured-link/featured-link-list.svelte";
	import type { FeaturedLink } from "$lib/components/featured-link/part/types";
	import { transformCollectionLink } from "$lib/util/sanity/transform-collection";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let collections: FeaturedLink[];
</script>

<SvelteSeo title="Topics" />

<Wrapper constrain gutter class="py-10">
	<FeaturedLinkList links={collections} />
</Wrapper>
