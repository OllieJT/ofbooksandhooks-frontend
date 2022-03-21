<script lang="ts" context="module">
	export const load: Load = async () => {
		const res = await getArticleList(1);
		return {
			props: {
				articles: res.articles.map(transformArticleCard),
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import { getArticleList } from "$lib/api/groq/article-list";
	import CardArticleMini from "$lib/components/card/card-article-mini.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import Madeline from "$lib/components/common/madeline.svelte";
	import { transformArticleCard } from "$lib/util/sanity/transform-article";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let articles: Card[] = [];
</script>

<SvelteSeo title="Homepage" />

<Wrapper constrain gutter class="py-10">
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-7">
		<div class="lg:col-span-5">
			<div class="grid gap-4 lg:grid-cols-2">
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
			</div>
		</div>
		<aside class="max-w-sm lg:col-span-2">
			<div class="sticky top-20">
				<Madeline />
			</div>
		</aside>
	</div>
</Wrapper>
