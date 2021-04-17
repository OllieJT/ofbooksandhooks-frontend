import { useInfiniteQuery } from "react-query";
import { getClient } from "../lib/sanity";
import { handlePagination } from "../utility/handle-pagination";

interface FetchProps {
	client: import("picosanity").PicoSanity;
	from: number;
	to: number;
}

interface Props<Type> {
	id: string;
	fetchDocs: (q: FetchProps) => Promise<Type>;
	initialData?: Type;
}

export const fetchArticleList = <T>({ id, fetchDocs, initialData }: Props<T>) => {
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
		id,

		async ({ pageParam = 1 }) => {
			const { from, to } = handlePagination(12, pageParam);
			const client = getClient(false);

			const data = await fetchDocs({
				client,
				from,
				to,
			});
			return { data, page: pageParam };
		},
		{
			getPreviousPageParam: (firstPage) => firstPage.page - 1,
			getNextPageParam: (lastPage) => lastPage.page + 1,
			initialData: initialData && {
				pageParams: [1],
				pages: [{ page: 1, data: initialData }],
			},
		},
	);

	if (error) {
		console.warn({ fetch: id, error });
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
