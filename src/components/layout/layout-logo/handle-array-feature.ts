import { useCallback, useState } from "react";

interface Output<T> {
	featured?: T;
	items: T[];
}

export const useArrayFeature = <T>(arr: T[]): Output<T> => {
	const initialItems = arr.splice(0, 1);
	const initialFeatured = arr[0];

	const [items, setItems] = useState<T[]>(initialItems);
	const [featured, setFeadured] = useState<T | undefined>(initialFeatured);

	useCallback(() => {
		const featureItem = arr[0];
		const allItems = arr.splice(0, 1) || [];

		setItems(allItems);
		setFeadured(featureItem);
	}, [arr]);

	return {
		featured,
		items,
	};
};
