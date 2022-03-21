<script lang="ts" context="module">
	export const load: Load = async ({ params }) => {
		const res = await getArticlePage(params.slug);

		if (!res) {
			return {
				status: 404,
				error: "Article not found",
			};
		}
		return {
			props: {
				article: res,
			},
		};
	};
</script>

<script lang="ts">
	import Wrapper from "$components/container/Wrapper.svelte";
	import { getArticlePage, type GroqArticlePage } from "$lib/api/groq/article-page";
	import RecommendedArticles from "$lib/components/section/recommended-articles.svelte";
	import type { Load } from "@sveltejs/kit";
	import SvelteSeo from "svelte-seo";

	export let article: GroqArticlePage;
</script>

<SvelteSeo title={article.title} />

<Wrapper constrain gutter>
	<pre>
	{JSON.stringify(article, null, 2)}
</pre>
</Wrapper>

<RecommendedArticles
	title="Recent publications"
	subtitle="Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."
	articles={[
		{
			href: "/",
			title: "Boost your conversion rate",
			tags: [{ name: "Article", color: "green" }],
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
			tags: [{ name: "Video", color: "purple" }],
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
			tags: [{ name: "Case Study", color: "red" }],
			author: {
				name: "Daniela Metz",
				avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
			},
			date: new Date("2020-7-12"),
			duration: "11 min",
			excerpt:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
		},
	]}
/>
