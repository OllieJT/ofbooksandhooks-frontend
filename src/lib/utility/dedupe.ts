export const dedupeArray = <T>(arr: T[]): T[] => {
	const dedupe = new Set(arr);
	return Array.from(dedupe);
};
