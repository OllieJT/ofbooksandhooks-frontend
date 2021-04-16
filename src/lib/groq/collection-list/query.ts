import { groqCollectionList } from "./groq";
import { handlePagination } from "../../../utility/handle-pagination";
import { getClient } from "../../sanity";

export const getCollectionList = async (page: number = 1, preview: boolean) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(12, page);

	return await groqCollectionList({ from, to, client });
};
