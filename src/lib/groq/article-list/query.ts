import { handlePagination } from "../../../utility/handle-pagination";
import { getClient } from "../../sanity";
import { groqArticleList } from "./groq";

export const getArticleList = async (page: number = 1, preview: boolean) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const articles = await groqArticleList({ client, from, to });

	return { articles };
};
