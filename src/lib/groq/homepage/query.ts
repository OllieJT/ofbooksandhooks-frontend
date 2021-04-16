import { getClient } from "../../sanity";
import { groqPageHome } from "./groq";

export const getPageHome = async (preview = false) => {
	const client = getClient(preview);

	return await groqPageHome({ client });
};
