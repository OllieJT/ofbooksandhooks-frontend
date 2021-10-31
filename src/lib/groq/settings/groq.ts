import groq from "groq";
import { GroqArticleCard, GroqCollectionCard } from "../models";
import type * as Schema from "../models/schema";

export type GroqSettings = Omit<
	Schema.Settings,
	"profile" | "featureCollection" | "featureArticle"
> & {
	profile: Schema.Author;
	featureCollection: GroqCollectionCard;
	featureArticle: GroqArticleCard;
};

interface Props {
	client: import("picosanity").PicoSanity;
}

export const groqSettings = async ({ client }: Props) =>
	client.fetch<GroqSettings>(
		groq`
		*[_id == "settings"][0]
		{
			...,
			profile->,

			featureCollection->{
				...,
				articles[0...4]->{
					title,
					slug,
					_id,
					_type,
					_createdAt,
					topics->{
						...
					}
				},
			},
			featureArticle->{
				...,
				topics[]->,
			},
		}
	`,
		{},
	);
