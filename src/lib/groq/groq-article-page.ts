import { groq } from "next-sanity";
import { getClient } from "../sanity/api";
import { GroqArticle, groqArticle } from "../db/groq-article-page";

export const getArticlePage = async (slug?: string, preview = false) => {
	const data: GroqArticle = await getClient(preview).fetch(groqArticle, {
		slug,
	});
	return data;
};

export const getArticlePagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "article" && defined(slug)].slug.current`,
	);
	return data;
};
