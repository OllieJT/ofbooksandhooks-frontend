<script lang="ts" context="module">
	export const load: Load = async ({ params }) => {
		const res = await getCollectionPage(params.slug);

		if (!res) {
			return {
				status: 404,
				error: "Collection not found",
			};
		}
		const { articles, ...rest } = res;
		return {
			props: {
				collection: rest,
				articles: articles.map(transformArticleCard),
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import { getCollectionPage, type GroqCollectionPage } from "$lib/api/groq/collection-page";
	import CardArticleMini from "$lib/components/card/card-article-mini.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import CardList from "$lib/components/card/card-list.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import { transformArticleCard } from "$lib/util/sanity/transform-article";
	import Badge from "@inqling/components/badge-label/badge-lg.svelte";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let articles: Card[];
	export let collection: Omit<GroqCollectionPage, "articles">;
</script>

<SvelteSeo title="Topic" />

<Wrapper constrain gutter class="py-10">
	<header>
		<h1 class="text-5xl font-semibold leading-normal text-mono-900">{collection.title}</h1>
		{#if collection.tags}
			<div class="flex flex-row flex-wrap items-center gap-1">
				{#each collection.tags as tag}
					<Badge>
						{tag.label}
					</Badge>
				{/each}
			</div>
		{/if}
	</header>
	<CardList>
		{#each articles as article}
			{#if article.src}
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
					href={article.href}
					title={article.title}
					date={article.date}
					tags={article.tags}
					author={article.author}
					duration={article.duration}
				>
					{article.excerpt}
				</CardArticleMini>
			{/if}
		{/each}
	</CardList>
</Wrapper>
