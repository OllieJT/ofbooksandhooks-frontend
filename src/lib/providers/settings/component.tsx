import { useQuery } from "react-query";
import { getSettings } from "./groq";
import { SettingsContext } from "./context";
//import { resolveSocialIcon } from "@lib/utility/resolve-platform";

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
				profile: data?.profile,
				navigation_menu: data?.navigation_menu ?? [],
				navigation_pinned: data?.navigation_pinned ?? [],
				tags: data?.tags ?? [],

				/* menu: {
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
				}, */
			}}
		>
			{children}
		</SettingsContext.Provider>
	);
};
