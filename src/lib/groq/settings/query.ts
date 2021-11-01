import { getClient } from "../../sanity";
import { groqCollectionList } from "../collection-list";
import { groqTopicList } from "../topic-list";
import { groqSettings } from "./groq";

export const getSettings = async (preview = false) => {
	const client = getClient(preview);

	const [settings, collections, topics] = await Promise.all([
		groqSettings({ client }),
		groqCollectionList({ client, from: 0, to: 32 }),
		groqTopicList({ client, from: 0, to: 32 }),
	]);

	return { settings, collections, topics };
};
