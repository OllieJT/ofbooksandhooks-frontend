import { useGroqList } from "../use-groq-list";
import { ArticleListQuery, articleListQuery } from "./query";

interface Props {
	limit?: number;
}

export const fetchArticleList = ({ limit = 12 }: Props) => {
	const query = useGroqList<ArticleListQuery>({
		handleQuery: articleListQuery,
		id: "article-list",
		limit: limit,
	});

	return query;
};
