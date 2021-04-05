import { getClient } from "../sanity.server";
import { handlePagination } from "../../utility/handle-pagination";
import { groqArticleList, GroqArticleList } from "../db/groq-article-list";

export const getArticleList = async (page: number = 1, preview = false) => {
	const { from, to } = handlePagination(12, page);

	const data: GroqArticleList = await getClient(preview).fetch(groqArticleList, {
		from,
		to,
	});

	return data;
};
