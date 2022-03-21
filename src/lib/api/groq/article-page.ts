import groq from "groq";
import { client } from "$lib/api/sanity/client";
import type * as Schema from "$lib/api/sanity/schema";

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

export const getArticlePage = async (slug: string) => {
	return await groqArticlePage({ slug, client });
};

export const getArticlePagePaths = async () => {
	const data: string[] = await client.fetch(
		groq`*[_type == "article" && defined(slug)].slug.current`,
	);
	return data;
};
