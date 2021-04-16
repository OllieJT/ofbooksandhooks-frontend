import { getClient } from "../../sanity";
import { groqCollectionTokens } from "./groq";

export const getCollectionList = async (limit: number = 32, preview: boolean) => {
	const client = getClient(preview);

	return await groqCollectionTokens({ from: 0, to: limit, client });
};
