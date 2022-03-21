<script lang="ts" context="module">
	export const load: Load = () => {
		const payload = {
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
		};
		return {
			props: { article: payload },
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import CardArticle from "$lib/components/card/card-article.svelte";
	import type { Card } from "$lib/components/card/part/types";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let article: Card;
</script>

<SvelteSeo title={article.title} />

<Wrapper constrain gutter>
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
</Wrapper>
