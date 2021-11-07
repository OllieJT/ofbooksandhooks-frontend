import { handlePagination } from "../../utility/handle-pagination";
import { getClient } from "../../sanity";
import groq from "groq";
import type * as Schema from "@lib/groq/models/schema";

/* export type GroqCollectionCard_Article = Pick<
	Schema.Article,
	"title" | "slug" | "_id" | "_type" | "_createdAt"
> & {
	topics: GroqTopicList;
}; */

export type GroqCollectionCard = Pick<
	Schema.Collection,
	"_id" | "_type" | "title" | "theme" | "tags"
> & {
	slug: string;
	date: string;
	articles: string[];
};

export type GroqCollectionList = GroqCollectionCard[];

interface Props {
	from: number;
	to: number;
	client: import("@sanity/client").SanityClient;
}

// TODO: Date Filter

export const groqCollectionList = async ({ from, to, client }: Props) =>
	client.fetch<GroqCollectionList>(
		groq`*[
				_type == "collection"
				&& defined(slug)
				&& metadata.publishAt <= now()
			] | order(publishAt desc) [$from...$to]
			{
				_id,
				_type,
				title,
				"slug":slug.current,
				"date": metadata.publishAt,
				theme,
				tags,
				"articles": *[
					_type == "article" && count(tags[][@.value in ^.^.tags[].value]) > 0
				].title
			}
		`,
		{ from, to },
	);

export const getCollectionList = async (page: number = 1, preview: boolean) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const collections = await groqCollectionList({ from, to, client });

	return collections;
};
