import groq from "groq";
import type * as Schema from "../models/schema";

export type GroqSettings = Omit<Schema.Settings, "profile"> & {
	profile: Schema.Author;
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
		}
	`,
		{},
	);
