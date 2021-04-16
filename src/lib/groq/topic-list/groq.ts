import groq from "groq";
import type * as Schema from "../models/schema";

export type GroqTopicList = Schema.Topic[];

interface Props {
	from: number;
	to: number;
	client: import("picosanity").PicoSanity;
}

export const groqTopicList = async ({ from, to, client }: Props) =>
	client.fetch<GroqTopicList>(
		groq`*[_type == "topic" && defined(slug)] | order(title desc) [$from...$to]
			{ ... }
		`,
		{ from, to },
	);
