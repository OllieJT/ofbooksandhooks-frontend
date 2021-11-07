import { groq } from "next-sanity";
import { handlePagination } from "../../utility/handle-pagination";
import { getClient } from "../../sanity/api";
import type * as Schema from "../models/schema";
import type { GroqArticleCard } from "../article-list";

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

export const groqCollectionPage = async ({ from, to, slug, client }: Props) =>
	client.fetch<GroqCollectionPage>(
		groq`*[_type == "collection" && slug.current == $slug][0]
			{

				_id,
				_type,
				title,
				_createdAt,
				_updatedAt,
				"slug":slug.current,
				theme,
				tags,
				"articles": *[_type == "article" && count(tags[][@.value in ^.^.tags[].value]) > 0 && metadata.publishAt <= now()] | order(publishAt desc) {
					_id,
					_type,
					title,
					"slug":slug.current,
					"date": metadata.publishAt,
					"thumbnail": thumbnail,
					tags,
				},
				metadata


			}
		`,
		{ from, to, slug },
	);

export const getCollectionPage = async (
	slug: string,
	page: number = 1,
	limit = 12,
	preview = false,
) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(limit, page);

	const collection = await groqCollectionPage({ from, to, client, slug });

	return collection;
};

export const getCollectionPagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "collection" && defined(slug)].slug.current`,
	);
	return data;
};
