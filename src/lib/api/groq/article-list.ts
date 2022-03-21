import { client } from "$lib/api/sanity/client";
import { handlePagination } from "$lib/util/handle-pagination";
import groq from "groq";
import { GroqArticleCardQuery, type GroqArticleCard } from "./fragments/article-list";

export type GroqArticleList = GroqArticleCard[];

interface GroqArticleListProps {
	from: number;
	to: number;
	client: import("@sanity/client").SanityClient;
}

export const groqArticleList = async ({ from, to, client }: GroqArticleListProps) =>
	client.fetch<GroqArticleCard[]>(
		groq`*[
			_type == "article"
			&& defined(slug)
			&& defined(metadata.publishAt)
			&& metadata.publishAt <= now()
		] | order(publishAt desc) [$from...$to]{
			${GroqArticleCardQuery}
		}
	 `,
		{ from, to },
	);

export const getArticleList = async (page: number = 1) => {
	const { from, to } = handlePagination(12, page);

	const articles = await groqArticleList({ from, to, client });

	return { articles };
};
