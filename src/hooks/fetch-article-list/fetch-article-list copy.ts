import { useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { getClient } from "../../lib/sanity.server";
import { handlePagination } from "../../utility/handle-pagination";
import { ArticleListQuery, articleListQuery } from "./query";

interface Props {
	limit?: number;
}

export const fetchArticleList = ({ limit = 12 }: Props) => {
	const queryKey = `article-list-${limit}`;

	const {
		refetch,

		status,
		data,
		error,
		isFetching,
		isFetchingNextPage,
		isFetchingPreviousPage,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
	} = useInfiniteQuery(
		queryKey,
		async ({ pageParam = 1 }) => {
			const { from, to } = handlePagination(limit, pageParam);

			const articles: ArticleListQuery = await getClient(
				false,
			).fetch(articleListQuery(), { from, to });
			return { articles, page: pageParam };
		},
		{
			getPreviousPageParam: (firstPage) => firstPage.page - 1,
			getNextPageParam: (lastPage) => lastPage.page + 1,
		},
	);

	useCallback(() => {
		refetch();
	}, [limit]);

	if (error) {
		console.warn({ fetch: queryKey, error });
	}

	return {
		status,
		data,
		error,
		isFetching,
		isFetchingNextPage,
		isFetchingPreviousPage,
		fetchNextPage,
		fetchPreviousPage,
		reset: () => refetch(),
		hasNextPage,
		hasPreviousPage,
	};
};
