// import { handlePagination } from "../../utility/handle-pagination";
// import { GroqArticleList, groqArticleList } from "../db/groq-article-list";
import { GroqCollectionList, groqCollectionList } from "../db/groq-collection-list";
import { GroqTopicListLite, groqTopicListLite } from "../db/groq-topic-list";
import { getClient } from "../sanity.server";

export const getPageArticles = async (preview = false) => {
	const client = getClient(preview);
	//const { from, to } = handlePagination(12, page);

	console.log(groqCollectionList, { from: 0, to: 32 });
	console.log(groqTopicListLite, { from: 0, to: 32 });

	const [
		//articles,
		collections,
		topics,
	]: [
		//GroqArticleList,
		GroqCollectionList,
		GroqTopicListLite,
	] = await Promise.all([
		//client.fetch(groqArticleList, {from,to,	}),
		client.fetch(groqCollectionList, { from: 0, to: 32 }),
		client.fetch(groqTopicListLite, { from: 0, to: 32 }),
	]);

	return {
		//articles,
		collections,
		topics,
	};
};
