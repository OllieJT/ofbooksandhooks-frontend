import { createContext, useContext } from "react";
import type {
	Article,
	Collection,
	Homepage,
	Linkpage,
	NavigationLinkExternal,
	NavigationLinkInternal,
	Person,
	SanityKeyed,
	Tags,
} from "@lib/groq";

type LinkInternal = Omit<NavigationLinkInternal, "page"> & {
	page: Article | Collection | Linkpage | Person | Homepage;
};

export type MenuLink = SanityKeyed<LinkInternal> | SanityKeyed<NavigationLinkExternal>;

export interface SettingsContextProps {
	profile?: Person;
	navigation_pinned: MenuLink[];
	navigation_menu: MenuLink[];
	tags: Tags;
}

export const SettingsContext = createContext<SettingsContextProps>({
	profile: undefined,
	navigation_menu: [],
	navigation_pinned: [],
	tags: [],
});

export const useSettings = () => useContext(SettingsContext);
