import groq from "groq";
import { GroqArticleCard } from "../models";
import type * as Schema from "../models/schema";

export type GroqCollectionPage = Omit<Schema.Collection, "articles"> & {
	articles: GroqArticleCard[];
};

interface Props {
	from: number;
	to: number;
	slug: string;
	client: import("@sanity/client").SanityClient;
}

export const groqCollectionPage = async ({ from, to, slug, client }: Props) =>
	client.fetch<GroqCollectionPage>(
		groq`*[_type == "collection" && slug.current == $slug][0]
			{
				...,
				articles[$from...$to]->{
					_id,
					_type,
					_createdAt,

					title,
					slug,
					metadata,

					thumbnail,
					topics[]->,
				},
			}
		`,
		{ from, to, slug },
	);
