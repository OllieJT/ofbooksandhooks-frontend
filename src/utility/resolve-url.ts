export type LinkablePage = any & {
	_type: string;
};

export const resolveUrl = (page: LinkablePage, absolute?: boolean) => {
	const PREFIX = absolute ? process.env.URL : "";

	switch (page._type) {
		case "homepage":
			return `${PREFIX}/`;
		case "article":
			return `${PREFIX}/articles/${page.slug?.current}`;
		case "collection":
			return `${PREFIX}/collections/${page.slug?.current}`;
		case "topic":
			return `${PREFIX}/topics/${page.slug?.current}`;

		default:
			return PREFIX + `404`;
	}
};
