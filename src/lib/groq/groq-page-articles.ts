import { groq } from "next-sanity";
import { handlePagination } from "../../utility/handle-pagination";
import { getClient } from "../sanity.server";
import {
	Article,
	Author,
	Img,
	Metadata,
	SanityDocument,
	Theme,
	Topic,
} from "../schema";
export const pageArticlesCollectionListQuery = groq`*[
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

		articles[0...4]->,
		theme
	}
 `;

export interface PageArticlesCollectionListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	articles: Article[];
	theme: Theme;
}

export const pageArticlestopicListQuery = groq`*[
	_type == "topic"
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
		metadata,...
	}
 `;

export interface PageArticlesTopicListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	metadata: Metadata;
}

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

export interface PageArticlesArticleListQuery extends SanityDocument {
	_type: "article";
	title: string;
	slug: { _type: "slug"; current: string };
	topics?: Array<Topic>;
	author: Author;
	thumbnail?: Img;
	metadata: Metadata;
}

export const getPageArticles = async (page: number = 1, preview = false) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const [articles, collections, topics]: [
		PageArticlesArticleListQuery,
		PageArticlesCollectionListQuery,
		PageArticlesTopicListQuery,
	] = await Promise.all([
		client.fetch(articleListQuery, {
			from,
			to,
		}),
		client.fetch(pageArticlesCollectionListQuery, {}),
		client.fetch(pageArticlestopicListQuery, {}),
	]);

	return { articles, collections, topics };
};
