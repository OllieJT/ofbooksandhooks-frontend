import { useQuery } from "react-query";
import { getSettings } from "../../lib/groq/settings";
import { handleSanityImageFixed } from "../../utility/handle-sanity-image";
import { SettingsContext } from "./context";

interface Props {
	children: React.ReactNode;
}

export const SettingsProvider = ({ children }: Props) => {
	const { error, data } = useQuery("settings", async () => await getSettings(false), {
		staleTime: 900000,
	});

	if (error) {
		console.warn({ fetch: "settings", error });
	}

	return (
		<SettingsContext.Provider
			value={{
				biography: {
					description: data?.biography.description,
					title: data?.biography.description,
					photo:
						data?.biography.photo &&
						handleSanityImageFixed({
							asset: data?.biography.photo,
							width: 240,
							height: 240,
						}),
				},
				profile: {
					name: data?.profile.name,
					knownAs: data?.profile.knownAs,
					photo:
						data?.profile.avatar &&
						handleSanityImageFixed({
							asset: data?.profile.avatar,
							width: 240,
							height: 240,
						}),
					platforms:
						data?.profile.platforms?.map((platform) => ({
							platform: platform.name,
							url: platform.link,
						})) || [],
				},
				featured: {
					article: data?.featureArticle,
					collection: data?.featureCollection,
				},
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
