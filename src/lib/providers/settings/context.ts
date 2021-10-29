import { createContext, useContext } from "react";
import type { GroqArticleCard, GroqCollectionCard } from "@lib/groq";
import type { FixedImage } from "@lib/utility/handle-sanity-image";
import type { SocialPlatform } from "@lib/utility/resolve-platform";

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
});

export const useSettings = () => {
	return useContext(SettingsContext);
};
