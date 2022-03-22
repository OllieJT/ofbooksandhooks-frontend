import groq from "groq";
import { client } from "$lib/api/sanity/client";
import type * as Schema from "$lib/api/sanity/schema";
import { handlePagination } from "$lib/util/handle-pagination";
import { GroqArticleCardQuery, type GroqArticleCard } from "./fragments/article-list";

export type GroqCollectionPage = Pick<
	Schema.Collection,
	"_id" | "_type" | "title" | "theme" | "tags" | "metadata" | "_createdAt" | "_updatedAt"
> & {
	slug: string;
	articles: GroqArticleCard[];
};

interface Props {
	from: number;
	to: number;
	slug: string;
	client: import("@sanity/client").SanityClient;
}

// TODO: Date Filter

export async function groqCollectionPage({ from, to, slug, client }: Props) {
	console.log(`*[_type == "collection" && slug.current == ${slug}][0]
	{

		_id,
		_type,
		title,
		theme,
		tags,
		metadata,
		_createdAt,
		_updatedAt,
		"slug":slug.current,
		"articles": *[
				_type == "article"
				&& count(tags[][@.value in ^.^.tags[].value]) > 0
				&& metadata.publishAt <= now()
			] | order(publishAt desc) {
			${GroqArticleCardQuery}
		},


	}
`);
	return client.fetch<GroqCollectionPage>(
		groq`*[_type == "collection" && slug.current == $slug][0]
			{

				_id,
				_type,
				title,
				theme,
				tags,
				metadata,
				_createdAt,
				_updatedAt,
				"slug":slug.current,
				"articles": *[
						_type == "article"
						&& count(tags[][@.value in ^.^.tags[].value]) > 0
						&& metadata.publishAt <= now()
					] | order(publishAt desc) {
					${GroqArticleCardQuery}
				},


			}
		`,
		{ from, to, slug },
	);
}

export const getCollectionPage = async (slug: string, page: number = 1, limit = 12) => {
	const { from, to } = handlePagination(limit, page);

	const collection = await groqCollectionPage({ from, to, client, slug });

	return collection;
};
