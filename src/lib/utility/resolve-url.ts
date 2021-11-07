export type LinkablePage = unknown & {
	_type: string;
	slug: string;
};

interface Props {
	slug: string | null;
	type: "collection" | "article" | "linkpage" | "person" | "homepage" | "settings" | "tag";
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
		case "linkpage":
			return `${PREFIX}/linkpage`;
		case "article":
			return `${PREFIX}/articles/${slug}`;
		case "collection":
			return `${PREFIX}/collections/${slug}`;
		case "person":
			return `${PREFIX}/@${slug}`;

		default:
			return PREFIX + `404`;
	}
};
