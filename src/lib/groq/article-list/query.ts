import { handlePagination } from "@lib/utility/handle-pagination";
import { getClient } from "@lib/sanity";
import type * as Schema from "@lib/groq/models/schema";
import groq from "groq";

export interface GroqArticleCard {
	_id: string;
	_type: "article";
	date: string;
	slug: string;
	tags: Schema.Tags;
	title: string;
	thumbnail: Schema.Thumbnail;
}
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
		] | order(publishAt desc) [$from...$to]
		{
			_id,
			_type,
			title,
			"slug":slug.current,
			"date": metadata.publishAt,
			"thumbnail": thumbnail,
			tags,
		}
	 `,
		{ from, to },
	);

export const getArticleList = async (page: number = 1, preview: boolean) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const articles = await groqArticleList({ from, to, client });

	return { articles };
};
