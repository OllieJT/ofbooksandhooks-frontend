<script lang="ts" context="module">
	export const load: Load = async ({ params }) => {
		const res = await getArticlePage(params.slug);

		if (!res) {
			return {
				status: 404,
				error: "Article not found",
			};
		}

		const { recommended, ...rest } = res;
		return {
			props: {
				article: rest,
				recommended: recommended.map(transformArticleCard),
			},
		};
	};
</script>

<script lang="ts">
	import { getArticlePage, type GroqArticlePage } from "$lib/api/groq/article-page";
	import { urlFor } from "$lib/api/sanity/client";
	import PortableText from "$lib/components/blocks/portable-text.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import Prose from "$lib/components/container/Prose.svelte";
	import RecommendedArticles from "$lib/components/section/recommended-articles.svelte";
	import { formatDate } from "$lib/util";
	import { colorFromTag } from "$lib/util/color-from-tag";
	import { transformArticleCard } from "$lib/util/sanity/transform-article";
	import Badge from "@inqling/components/badge-label/badge-lg.svelte";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let article: Omit<GroqArticlePage, "recommended">;
	export let recommended: Card[];

	const publishedAt = new Date(article.metadata.publishAt);
	const tags = article.tags || [];

	const src = urlFor(article.thumbnail).width(1200).height(720).url();
	const authorName = [article.author.nameFirst, article.author.nameLast].join(" ");
	const authorAlias = article.author.alias;
	const authorAvatar = article.author.avatar
		? urlFor(article.author.avatar).width(80).height(80).url()
		: null;
</script>

<SvelteSeo title={article.title} />

<div class="relative overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<header class="mx-auto max-w-3xl py-10 text-lg">
			<img class="mb-10 w-full rounded-2xl" {src} alt="" width="1200" height="720" />
			<h6
				class="mb-3 block text-center text-base font-semibold uppercase tracking-wide text-primary-600"
			>
				{formatDate.pretty(publishedAt)}
			</h6>
			<h1
				class="my-3 block text-center text-3xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-4xl"
			>
				{article.title}
			</h1>
			<div class="mt-6 flex flex-wrap items-center justify-center gap-2">
				{#each tags as tag}
					<Badge pill theme={colorFromTag(tag.value)}>{tag.label}</Badge>
				{/each}
			</div>
		</header>

		<Prose>
			{#if article.content}
				<PortableText blocks={article.content} />
			{:else}
				<p>Nothing to see here... yet.</p>
			{/if}
			<br />
			<hr />
			<br />
			<!-- 	{JSON.stringify(article.content, null, 2)}; -->
		</Prose>

		<footer class="mt-6 overflow-hidden lg:mt-10">
			<div class="relative mx-auto max-w-3xl">
				<div class="relative">
					<div class="absolute inset-0 flex items-center" aria-hidden="true">
						<div class="w-full border-t border-gray-300" />
					</div>
					<div class="relative flex justify-center">
						<span class="bg-white px-3 text-lg font-medium text-gray-900">By</span>
					</div>
				</div>
				<div class="relative">
					<blockquote class="mt-10">
						{#if article.author.bio}
							<div
								class="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-mono-900"
							>
								<Prose>
									<PortableText blocks={article.author.bio} />
								</Prose>
							</div>
						{/if}
						<footer class="mt-8">
							<div class="md:flex md:items-center md:justify-center">
								{#if authorAvatar}
									<div class="md:flex-shrink-0">
										<img
											class="mx-auto h-10 w-10 rounded-full"
											src={authorAvatar}
											alt=""
										/>
									</div>
								{/if}
								<div
									class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
								>
									<div class="text-base font-medium text-mono-900">
										{authorName}
									</div>

									<svg
										class="mx-1 hidden h-5 w-5 text-primary-600 md:block"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M11 0h3L9 20H6l5-20z" />
									</svg>

									<div class="text-base font-medium text-mono-500">
										{authorAlias}
									</div>
								</div>
							</div>
						</footer>
					</blockquote>
				</div>
			</div>
		</footer>
	</div>
</div>

<RecommendedArticles title="Recent Content" articles={recommended} />
