import groq from "groq";
import type { GroqArticleCard, GroqCollectionCard } from "../models";
import type * as Schema from "../models/schema";

export type GroqArticlePage_Recommended = GroqArticleCard | GroqCollectionCard;

export type GroqArticlePage = Omit<Schema.Article, "author" | "recommended" | "topics"> & {
	author: Schema.Author;
	topics: Schema.Topic[];
	recommended: GroqArticlePage_Recommended[];
};

export const groqArticlePageQuery = groq`*[_type == "article" && slug.current == $slug][0]
{
	topics[]->{...},
	recommended[]->{
		...,
		topics[]->,
		articles[0...4]->{
			title,
			slug,
			thumbnail,
			_id,
			_type,
			_createdAt,
		},
	},
	author->{...},
	content[]{
		...,
		markDefs[]{...,reference->},
	},
	...,
}
`;

interface Props {
	slug: string;
	client: import("@sanity/client").SanityClient;
}
export const groqArticlePage = ({ slug, client }: Props) =>
	client.fetch<GroqArticlePage>(groqArticlePageQuery, { slug });
