<script lang="ts" context="module">
	export const load: Load = async () => {
		const res = await getArticleList(1);
		const articles = res.articles || [];
		return {
			props: {
				articles: articles.map(transformArticleCard),
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import { getArticleList } from "$lib/api/groq/article-list";
	import CardArticleMini from "$lib/components/card/card-article-mini.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import CardList from "$lib/components/card/card-list.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import { transformArticleCard } from "$lib/util/sanity/transform-article";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let articles: Card[] = [];
</script>

<SvelteSeo title="Articles" />

<Wrapper constrain gutter class="py-10">
	<CardList>
		{#each articles as article}
			<CardArticle
				href={article.href}
				title={article.title}
				date={article.date}
				tags={article.tags}
				src={article.src}
				author={article.author}
				duration={article.duration}
			>
				{article.excerpt}
			</CardArticle>
		{:else}
			<CardArticleMini
				href="/"
				title="Nothing to see here..."
				date={new Date()}
				tags={[{ name: "404", color: "mono" }]}
				author={undefined}
				duration={undefined}
			>
				Something went wrong - I couldn't find the content you were looking for.
			</CardArticleMini>
		{/each}
	</CardList>
</Wrapper>
