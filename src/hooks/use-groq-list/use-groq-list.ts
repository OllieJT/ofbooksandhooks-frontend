import { useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { getClient } from "../../lib/sanity.server";
import { handlePagination } from "../../utility/handle-pagination";

interface Props {
	id: string;
	limit: number;
	handleQuery: () => string;
}

export const useGroqList = <T>({ id, limit, handleQuery }: Props) => {
	const queryKey = `${id}-${limit}`;

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

			const results: T = await getClient(false).fetch(handleQuery(), {
				from,
				to,
			});
			return { results, page: pageParam };
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
