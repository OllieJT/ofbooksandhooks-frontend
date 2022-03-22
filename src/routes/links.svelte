<script lang="ts" context="module">
	export const load: Load = async () => {
		const res = await getLinkPage("todo");
		const { recommended, ...rest } = res;
		return {
			props: {
				page: rest,
				recommended: recommended.map(transformArticleCard),
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import FeaturedLinkList from "$lib/components/featured-link/featured-link-list.svelte";
	import SvelteSeo from "svelte-seo";
	import { getLinkPage, type GroqLinkPage } from "$lib/api/groq/links-page";
	import type { Load } from "@sveltejs/kit";
	import { iconFromUrl } from "$lib/util/icon-from-url";
	import { transformArticleCard } from "$lib/util/sanity/transform-article";
	import type { Card } from "$lib/components/card/part/types";
	import RecommendedArticles from "$lib/components/section/recommended-articles.svelte";

	export let page: GroqLinkPage;
	export let recommended: Card[];
</script>

<SvelteSeo title="Links" />

<Wrapper constrain gutter class="py-10">
	<header class="mb-6">
		<h1 class="text-5xl font-semibold leading-normal text-mono-900">{page.title}</h1>
	</header>
	<FeaturedLinkList
		links={page.links.map((x) => ({
			//TODO: Resolve icon from URL
			icon: iconFromUrl(x.href),
			title: x.title,
			description: x.description,
			href: x.href,
			theme: x.theme || "mono",
		}))}
	/>
</Wrapper>

<RecommendedArticles title="Recent Content" articles={recommended} />
