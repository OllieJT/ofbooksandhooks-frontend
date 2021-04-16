import { handlePagination } from "../../../utility/handle-pagination";
import { getClient } from "../../sanity";
import { groqCollectionList } from "../collection-list";
import { groqTopicList } from "../topic-list";
import { groqArticleList } from "./groq";

export const getArticleList = async (page: number = 1, preview: boolean) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	const [articles, collections, topics] = await Promise.all([
		//client.fetch(groqArticleList, {from,to,	}),
		groqArticleList({ client, from, to }),
		groqCollectionList({ client, from: 0, to: 32 }),
		groqTopicList({ client, from: 0, to: 32 }),
	]);

	return { articles, collections, topics };
};
