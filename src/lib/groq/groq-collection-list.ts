import { groq } from "next-sanity";
import { Article, Metadata, SanityDocument, Theme } from "../schema";
import { getClient } from "../sanity.server";

export const collectionListQuery = groq`*[
	_type == "collection"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(title desc)  {
		_id,
		_createdAt,
		_rev,
		_updatedAt,

		_type,
		title,
		slug,
		metadata,

		articles[]->,
		theme
	}
 `;

export interface CollectionListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	metadata: Metadata;

	articles: Article[];
	theme: Theme;
}

export const getCollectionList = async (preview = false) => {
	const data: CollectionListQuery[] = await getClient(preview).fetch(
		collectionListQuery,
	);

	return data;
};
