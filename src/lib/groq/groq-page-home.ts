import { groqHome, GroqHome } from "../db/groq-home";
import { getClient } from "../sanity.server";

export const getPageHome = async (preview = false) => {
	const homepage: GroqHome = await getClient(preview).fetch(groqHome, {});
	return { homepage };
};
