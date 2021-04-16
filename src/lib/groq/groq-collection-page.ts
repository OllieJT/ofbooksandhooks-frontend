import { groq } from "next-sanity";
import { getClient } from "../sanity/api";
import { GroqCollection, groqCollection } from "../db/groq-collection-page";

export const getCollectionPage = async (slug?: string, preview = false) => {
	const data: GroqCollection = await getClient(preview).fetch(groqCollection, {
		slug,
	});
	return data;
};

export const getCollectionPagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "collection" && defined(slug)].slug.current`,
	);
	return data;
};
