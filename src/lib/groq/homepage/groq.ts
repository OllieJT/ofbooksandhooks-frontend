import groq from "groq";
import type { GroqArticleCard } from "../article-list";
import type { GroqCollectionCard } from "../collection-list";
import type * as Schema from "../models/schema";

export type GroqHome_Block = GroqArticleCard | GroqCollectionCard;

export type GroqHome = Omit<Schema.Homepage, "featured" | "blocks"> & {
	featured: GroqArticleCard;
	blocks: GroqHome_Block[];
};

interface Props {
	client: import("@sanity/client").SanityClient;
}

export const groqPageHome = async ({ client }: Props) =>
	client.fetch<GroqHome>(
		groq`
		*[_id == "homepage"][0]
		{
			...,
			featured->{
				...,
				topics[]->,
			},
			blocks[]->{
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
		}
	`,
		{},
	);
