import { groq } from "next-sanity";
import { getClient } from "../../sanity/api";
import type { GroqArticleCard } from "../article-list";
import type { GroqCollectionCard } from "../collection-list";
import type * as Schema from "../models/schema";

export type GroqArticlePage_Recommended = GroqArticleCard | GroqCollectionCard;

export type GroqArticlePage = Pick<
	Schema.Article,
	| "_createdAt"
	| "_type"
	| "_updatedAt"
	| "content"
	| "metadata"
	| "tags"
	| "thumbnail"
	| "title"
> & {
	author: Schema.Person;
	slug: string;
	//recommended: GroqArticlePage_Recommended[];
};
interface Props {
	slug: string;
	client: import("@sanity/client").SanityClient;
}

export const groqArticlePageQuery = groq`*[_type == "article" && slug.current == $slug][0]
{
	_createdAt,
	_type,
	_updatedAt,
	author->,
	content[]{
		...,
		markDefs[]{...,reference->},
	},
	metadata,
	"slug": slug.current,
	tags,
	thumbnail,
	title,
}
`;

export const groqArticlePage = ({ slug, client }: Props) =>
	client.fetch<GroqArticlePage>(groqArticlePageQuery, { slug });

export const getArticlePage = async (slug: string, preview = false) => {
	const client = getClient(preview);

	return await groqArticlePage({ slug, client });
};

export const getArticlePagePaths = async () => {
	const data: string[] = await getClient(false).fetch(
		groq`*[_type == "article" && defined(slug)].slug.current`,
	);
	return data;
};
