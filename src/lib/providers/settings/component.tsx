import { useQuery } from "react-query";
import { getSettings } from "@lib/groq/settings";
import { handleSanityImageFixed } from "@lib/utility/handle-sanity-image";
import { SettingsContext } from "./context";
import { resolveSocialIcon } from "@lib/utility/resolve-platform";

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
					description: data?.settings.biography.description,
					title: data?.settings.biography.title,
					photo:
						data?.settings.biography.photo &&
						handleSanityImageFixed({
							asset: data?.settings.biography.photo,
							width: 240,
							height: 240,
						}),
				},
				profile: {
					name: data?.settings.profile.name,
					knownAs: data?.settings.profile.knownAs,
					photo:
						data?.settings.profile.avatar &&
						handleSanityImageFixed({
							asset: data?.settings.profile.avatar,
							width: 240,
							height: 240,
						}),
					platforms:
						data?.settings.profile.platforms?.map((platform) => ({
							platform: platform.name,
							url: platform.link,
						})) || [],
				},
				featured: {
					article: data?.settings.featureArticle,
					collection: data?.settings.featureCollection,
				},

				menu: {
					links: [
						{ label: "All", href: "/articles" },
						{ label: "Of Books", href: "/topics/books" },
						{ label: "Of Hooks", href: "/topics/hooks" },
						{ label: "Collections", href: "/collections" },
						{
							label: "instagram",
							icon: resolveSocialIcon("instagram"),
							href: "https://www.instagram.com/ofbooksandhooks/",
						},
						{
							label: "etsy",
							icon: resolveSocialIcon("etsy"),
							href: "https://www.etsy.com/shop/OfBooksAndHooks",
						},
					],
					pinned: { label: "Links", href: "/links" },
				},
				taxonomy: {
					collections: data?.collections ?? [],
					topics: data?.topics ?? [],
				},
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
