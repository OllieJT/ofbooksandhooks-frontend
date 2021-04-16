import { getClient } from "../../sanity";
import { groqSettings } from "./groq";

export const getSettings = async (preview = false) => {
	const client = getClient(preview);

	return await groqSettings({ client });
};
