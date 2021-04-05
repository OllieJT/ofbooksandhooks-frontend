import { handlePagination } from "../../utility/handle-pagination";
import { GroqArticleList, groqArticleList } from "../db/groq-article-list";
import {
	GroqCollectionListLite,
	groqCollectionListLite,
} from "../db/groq-collection-list";
import { GroqTopicListLite, groqTopicListLite } from "../db/groq-topic-list";
import { getClient } from "../sanity.server";

export const getPageArticles = async (page: number = 1, preview = false) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const [articles, collections, topics]: [
		GroqArticleList,
		GroqCollectionListLite,
		GroqTopicListLite,
	] = await Promise.all([
		client.fetch(groqArticleList, {
			from,
			to,
		}),
		client.fetch(groqCollectionListLite, { from: 0, to: 32 }),
		client.fetch(groqTopicListLite, { from: 0, to: 32 }),
	]);

	return { articles, collections, topics };
};
