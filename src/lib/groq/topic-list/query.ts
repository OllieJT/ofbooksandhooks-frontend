import { getClient } from "../../sanity";
import { groqTopicList } from "./groq";

export const getTopicList = async (limit: number = 32, preview = false) => {
	const client = getClient(preview);

	return await groqTopicList({ from: 0, to: limit, client });
};
