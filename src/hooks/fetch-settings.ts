import { useQuery } from "react-query";
import { getSettings } from "../lib/groq/settings";

export const fetchSettings = () => {
	const { error, data } = useQuery("settings", async () => await getSettings(false), {
		staleTime: 900000,
	});

	if (error) {
		console.warn({ fetch: "settings", error });
	}

	return data;
};
