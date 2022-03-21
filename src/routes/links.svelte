<script lang="ts" context="module">
	export const load: Load = async () => {
		const res = await getLinkPage("todo");
		return {
			props: {
				page: res,
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

	export let page: GroqLinkPage;
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
