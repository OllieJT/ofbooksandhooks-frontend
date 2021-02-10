import { groq } from "next-sanity";
import {
	Article,
	Author,
	Collection,
	Metadata,
	Richtext,
	SanityDocument,
	Topic,
	Img,
} from "../schema";
import { getClient } from "../sanity.server";

export const articlePageQuery = groq`*[
	_type == "article" && slug.current == $slug
	][0]{
		...,
		topics[]->,
		recommended[]->,
		content[]{
			...,
			markDefs[]{...,reference->},
		}
	}
`;
export interface ArticleQuery extends SanityDocument {
	_type: "article";
	title: string;
	content?: Richtext;
	image?: Img;
	topics?: Array<Topic>;
	recommended?: Array<Collection | Article>;
	slug: { _type: "slug"; current: string };
	publishAt: string;
	author?: Author;
	metadata: Metadata;
}

export const getArticlePage = async (slug?: string, preview = false) => {
	const data: ArticleQuery = await getClient(preview).fetch(articlePageQuery, {
		slug,
	});
	return data;
};

const articlePathsQuery = groq`*[_type == "article" && defined(slug)].slug.current`;

export const getArticlePagePaths = async () => {
	const data: string[] = await getClient(false).fetch(articlePathsQuery);
	return data;
};
