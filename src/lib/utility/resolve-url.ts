export type LinkablePage = unknown & {
	_type: string;
	slug: string;
};

interface Props {
	slug: string;
	type?:
		| string
		| "topic"
		| "collection"
		| "article"
		| "author"
		| "homepage"
		| "settings";
	isAbsolute?: boolean;
}

export const resolveUrl = ({ slug, type, isAbsolute = false }: Props) => {
	const PREFIX = isAbsolute ? process.env.URL : "";

	if (!type) {
		console.warn(`Could not find page type for ${slug}`);
		return "/404";
	}

	switch (type) {
		case "homepage":
			return `${PREFIX}/`;
		case "article":
			return `${PREFIX}/articles/${slug}`;
		case "collection":
			return `${PREFIX}/collections/${slug}`;
		case "topic":
			return `${PREFIX}/topics/${slug}`;
		case "author":
			return `${PREFIX}/authors/${slug}`;

		default:
			return PREFIX + `404`;
	}
};
