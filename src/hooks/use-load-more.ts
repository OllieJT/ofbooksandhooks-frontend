import { useCallback, useEffect, useState } from "react";
import { dedupeArray } from "../utility/dedupe";

type query<T> = (page: number) => Promise<T[]>;

export function useLoadMore<Output>(handleFetch: query<Output>) {
	const [page, setPage] = useState(1);
	const [entries, setEntries] = useState<Output[]>([]);
	const [isLoading, setLoading] = useState(true);

	const nextPage = () => setPage(page + 1);

	const reset = useCallback(async () => {
		setLoading(true);
		const newEntries = await handleFetch(page);
		setEntries(() => dedupeArray(newEntries));
		setLoading(false);
	}, [page]);

	const load = useCallback(async () => {
		setLoading(true);
		const newEntries = await handleFetch(page);
		setEntries((prev) => dedupeArray([...prev, ...newEntries]));
		setLoading(false);
	}, [page]);

	useEffect(() => {
		console.log({ isLoading });
		load();
		return;
	}, [page]);

	return {
		entries,
		isLoading,
		nextPage,
		reset,
	};
}
