import { groq } from "next-sanity";
import { handlePagination } from "../../../utility/handle-pagination";
import { getClient } from "../../sanity/api";
import { groqCollectionPage } from "./groq";

export const getCollectionPage = async (
	slug: string,
	page: number = 1,
	limit = 12,
	preview = false,
) => {
	const client = getClient(preview);
	const { from, to } = handlePagination(limit, page);

	return await groqCollectionPage({ from, to, client, slug });
};

export const getCollectionPagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "collection" && defined(slug)].slug.current`,
	);
	return data;
};
