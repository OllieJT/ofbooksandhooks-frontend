import { groq } from "next-sanity";
import { Article } from "../schema";
import { getClient } from "../sanity";
import { handlePagination } from "../../utility/handle-pagination";

const articleListQuery = (query?: string) => groq`*[
	_type == "article"
	&& defined(slug)
	&& defined(publishedAt)
	&& defined(category)
	&& publishedAt <= now()
	${query || ""}
	] | order(publishedAt desc) [$from...$to] {
		...
	}
 `;

export const getArticles = async (page: number, preview = false) => {
	const { from, to } = handlePagination(12, page);

	const fetchArticles = articleListQuery(``);

	const data: Article[] = await getClient(preview).fetch(fetchArticles, {
		from,
		to,
	});

	return data;
};
