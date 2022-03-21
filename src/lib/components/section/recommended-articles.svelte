<script lang="ts">
	import type { Card } from "../card/part/types";
	import CardArticleMini from "$lib/components/card/card-article-mini.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import CardList from "$lib/components/card/card-list.svelte";

	export let title: string;
	export let subtitle: string | undefined;
	export let articles: Card[];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
	<div class="relative mx-auto max-w-7xl">
		<div class="text-center">
			<h2 class="text-3xl font-semibold tracking-tight text-mono-900 sm:text-4xl">
				{title}
			</h2>
			{#if subtitle}
				<p class="mx-auto mt-3 max-w-2xl text-xl text-mono-500 sm:mt-4">
					{subtitle}
				</p>
			{/if}
		</div>
		<CardList>
			{#each articles as article}
				{#if article.src}
					<CardArticle
						href={article.href}
						title={article.title}
						date={article.date}
						topic={article.topic}
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
						topic={article.topic}
						author={article.author}
						duration={article.duration}
					>
						{article.excerpt}
					</CardArticleMini>
				{/if}
			{/each}
		</CardList>
	</div>
</div>

<!--
<div class="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
	<div class="relative mx-auto max-w-lg divide-y-2 divide-mono-200 lg:max-w-7xl">
		<div>
			<h2 class="text-3xl font-extrabold tracking-tight text-mono-900 sm:text-4xl">
				Recent publications
			</h2>
			<p class="mt-3 text-xl text-mono-500 sm:mt-4">
				Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst
				amet. Sapien tortor lacus arcu.
			</p>
		</div>
		<CardList>
			{#each articles as article}
				<CardArticleMini
					href={article.href}
					title={article.title}
					date={article.date}
					topic={article.topic}
					author={article.author}
					duration={article.duration}
				>
					{article.excerpt}
				</CardArticleMini>
			{/each}
		</CardList>
	</div>
</div>
 -->
