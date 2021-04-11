import { useQuery } from "react-query";
import { groqSettings, GroqSettings } from "../lib/db/groq-settings";
import { getClient } from "../lib/sanity.server";

export const fetchSettings = () => {
	const { error, data } = useQuery(
		"settings",
		async () => {
			const document: GroqSettings = await getClient(true).fetch(groqSettings);
			return document;
		},
		{
			staleTime: 900000,
		},
	);

	if (error) {
		console.warn({ fetch: "settings", error });
	}

	return data;
};
