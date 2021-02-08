import { groq } from "next-sanity";
import { Article } from "../schema";
import { getClient } from "../sanity";

export const articlePageQuery = groq`*[
	_type == "article" && slug.current == $slug
	][0]{
		...
	}
`;

export const getArticlePage = async (slug?: string, preview = false) => {
	const data: Article = await getClient(preview).fetch(articlePageQuery, {
		slug,
	});
	return data;
};

const articlePathsQuery = groq`*[_type == "article" && defined(slug)].slug.current`;

export const getArticlePagePaths = async () => {
	const data: string[] = await getClient(false).fetch(articlePathsQuery);
	return data;
};
