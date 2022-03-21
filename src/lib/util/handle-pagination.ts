export const handlePagination = (limit: number, currentPage?: number) => {
	const page = currentPage || 1;
	const pageFrom = (page - 1) * limit;
	const pageTo = pageFrom + limit;

	return {
		page,
		from: pageFrom,
		to: pageTo,
	};
};
