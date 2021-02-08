import { groq } from "next-sanity";
import {
	Article,
	Author,
	Collection,
	Metadata,
	SanityDocument,
	Topic,
	Img,
} from "../schema";
import { getClient } from "../sanity";
import { handlePagination } from "../../utility/handle-pagination";
import { SanityKeyedReference } from "sanity-codegen";

export const articleListQuery = groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(publishAt)
	&& publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		_id,
		_createdAt,
		_rev,
		_updatedAt,

		_type,
		title,
		image,
		topics[]->,
		recommended,
		slug,
		publishAt,
		author,
		metadata,
	}
 `;

export interface ArticleListQuery extends SanityDocument {
	_type: "article";
	title: string;
	image?: Img;
	topics?: Array<Topic>;
	recommended?: Array<SanityKeyedReference<Collection | Article>>;
	slug: { _type: "slug"; current: string };
	publishAt: string;
	author?: Author;
	metadata: Metadata;
}

export const getArticleList = async (page: number = 1, preview = false) => {
	const { from, to } = handlePagination(12, page);

	const data: ArticleListQuery[] = await getClient(preview).fetch(articleListQuery, {
		from,
		to,
	});

	return data;
};
