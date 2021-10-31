import { createContext, useContext } from "react";
import type { GroqArticleCard, GroqCollectionCard } from "@lib/groq";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import type { SocialPlatform } from "@lib/utility/resolve-platform";
import type { GlobalMenuItemProps } from "@components/layout/layout-global/layout-global-menu";

//TODO:Move links to sanity settings
interface Platform {
	url: string;
	platform: SocialPlatform;
}

export interface SettingsContextProps {
	biography: {
		description?: string;
		title?: string;
		photo?: FixedImage;
	};
	profile: {
		name?: string;
		knownAs?: string;
		platforms?: Platform[];
		photo?: FixedImage;
	};
	featured: {
		article?: GroqArticleCard;
		collection?: GroqCollectionCard;
	};
	menu: {
		links: GlobalMenuItemProps[];
		pinned?: GlobalMenuItemProps;
	};
}

export const SettingsContext = createContext<SettingsContextProps>({
	biography: {
		description: undefined,
		title: undefined,
		photo: undefined,
	},
	profile: {
		name: undefined,
		knownAs: undefined,
		platforms: [],
		photo: undefined,
	},
	featured: {
		article: undefined,
		collection: undefined,
	},
	menu: {
		links: [],
		pinned: undefined,
	},
});

export const useSettings = () => {
	return useContext(SettingsContext);
};
