import { groq } from "next-sanity";
import { Author, Metadata, SanityDocument, Topic, Img } from "../schema";
import { getClient } from "../sanity.server";
import { handlePagination } from "../../utility/handle-pagination";

export const articleListQuery = groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(metadata.publishAt)
	&& metadata.publishAt <= now()
	] | order(publishAt desc) [$from...$to] {
		_id,
		_createdAt,
		_rev,
		_updatedAt,

		_type,
		title,
		slug,
		topics[]->,
		author->,
		thumbnail,
		metadata,
	}
 `;

export interface ArticleListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	topics?: Array<Topic>;
	author: Author;
	thumbnail?: Img;
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
