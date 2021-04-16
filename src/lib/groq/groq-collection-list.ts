import { getClient } from "../sanity/api";
import { GroqCollectionList, groqCollectionList } from "../db/groq-collection-list";
import { handlePagination } from "../../utility/handle-pagination";

export const getCollectionList = async (page: number = 1, preview = false) => {
	const { from, to } = handlePagination(12, page);

	const data: GroqCollectionList = await getClient(preview).fetch(
		groqCollectionList,
		{
			from,
			to,
		},
	);

	return data;
};
