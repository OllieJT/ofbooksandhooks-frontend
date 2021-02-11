export type LinkablePage = any & {
	_type: string;
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
			return `${PREFIX}/article/${page.slug?.current}`;
		case "collection":
			return `${PREFIX}/collection/${page.slug?.current}`;
		case "topic":
			return `${PREFIX}/topic/${page.slug?.current}`;
		case "author":
			return `${PREFIX}/author/${page.slug?.current}`;

		default:
			return PREFIX + `404`;
	}
};
