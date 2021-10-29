import { groq } from "next-sanity";
import { handlePagination } from "../../utility/handle-pagination";
import { getClient } from "../../sanity/api";
import { groqTopicArticleList, groqTopicPage } from "./groq";

export const getTopicPage = async (
	slug: string,
	page: number = 1,
	limit = 12,
	preview = false,
) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(limit, page);

	const [topic, articles] = await Promise.all([
		groqTopicPage({ client, slug }),
		groqTopicArticleList({ client, slug, from, to }),
	]);

	return { topic, articles };
};

export const getTopicPagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "topic" && defined(slug)].slug.current`,
	);
	return data;
};
