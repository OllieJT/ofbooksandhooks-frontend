import { groq } from "next-sanity";
import { getClient } from "../../sanity/api";
import { groqArticlePage } from "./groq";

export const getArticlePage = async (slug: string, preview = false) => {
	const client = getClient(preview);

	return await groqArticlePage({ slug, client });
};

export const getArticlePagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "article" && defined(slug)].slug.current`,
	);
	return data;
};
