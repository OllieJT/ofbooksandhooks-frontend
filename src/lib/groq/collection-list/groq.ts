import groq from "groq";
import { GroqCollectionCard } from "../models";

export type GroqCollectionList = GroqCollectionCard[];

interface Props {
	from: number;
	to: number;
	client: import("picosanity").PicoSanity;
}

export const groqCollectionList = async ({ from, to, client }: Props) =>
	client.fetch<GroqCollectionList>(
		groq`*[
				_type == "collection"
				&& defined(slug)
				&& defined(metadata.publishAt)
				&& metadata.publishAt <= now()
			] | order(publishAt desc) [$from...$to]
			{
				...,
				articles[0...4]->{
					title,
					slug,
					thumbnail,
					_id,
					_type,
					_createdAt,
				},
			}
		`,
		{ from, to },
	);
