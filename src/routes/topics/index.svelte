<script lang="ts" context="module">
	export const load: Load = () => {
		const payload = [
			{
				href: "/",
				title: "Boost your conversion rate",
				src: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1..1&,ix:=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
				topic: { name: "Article", color: "green" },
				author: {
					name: "Roel Aufderehar",
					avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: new Date("2020-02-12"),
				duration: "6 min",
				excerpt:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
			},
			{
				href: "/",
				title: "How to use search engine optimization to drive sales",
				src: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1..1&,ixid:yJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
				topic: { name: "Video", color: "purple" },
				author: {
					name: "Brenna Goyette",
					avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: new Date("2020-04-12"),
				duration: "4 min",
				excerpt:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
			},
			{
				href: "/",
				title: "Improve your customer experience",
				src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1..1&,ix:=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
				topic: { name: "Case Study", color: "red" },
				author: {
					name: "Daniela Metz",
					avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				date: new Date("2020-7-12"),
				duration: "11 min",
				excerpt:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
			},
		];
		return {
			props: { articles: [...payload, ...payload, ...payload] },
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import CardArticleMini from "$lib/components/card/card-article-mini.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import CardList from "$lib/components/card/card-list.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let articles: Card[];
</script>

<SvelteSeo title="Topics" />

<Wrapper constrain gutter>
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
</Wrapper>
