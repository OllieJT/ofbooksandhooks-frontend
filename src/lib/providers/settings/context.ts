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
} from "@lib/groq";
import type { TagProps } from "@components/common/tag";

type LinkInternal = Omit<NavigationLinkInternal, "page"> & {
	page: Article | Collection | Linkpage | Person | Homepage;
};

export type MenuLink = SanityKeyed<LinkInternal> | SanityKeyed<NavigationLinkExternal>;

export interface SettingsContextProps {
	profile?: Person;
	navigation_pinned: MenuLink[];
	navigation_menu: MenuLink[];
	tags: TagProps[];
}

export const SettingsContext = createContext<SettingsContextProps>({
	profile: undefined,
	navigation_menu: [],
	navigation_pinned: [],
	tags: [],
});

export const useSettings = () => useContext(SettingsContext);
