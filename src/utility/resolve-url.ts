export type LinkablePage = unknown & {
	_type: string;
	slug: string;
};

export const resolveUrl = (page: LinkablePage, absolute?: boolean) => {
	const PREFIX = absolute ? process.env.URL : "";

	if (!page?._type) {
		console.warn(`Could not find page type for ${page}`);
		return "/404";
	}

	switch (page._type) {
		case "homepage":
			return `${PREFIX}/`;
		case "article":
			return `${PREFIX}/articles/${page.slug}`;
		case "collection":
			return `${PREFIX}/collections/${page.slug}`;
		case "topic":
			return `${PREFIX}/topics/${page.slug}`;
		case "author":
			return `${PREFIX}/authors/${page.slug}`;

		default:
			return PREFIX + `404`;
	}
};
