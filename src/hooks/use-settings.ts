import { createContext, useContext } from "react";
import { FixedImage, handleSanityImageFixed } from "../utility/handle-sanity-image";
import { SocialPlatform } from "../utility/resolve-platform";
import { fetchSettings } from "./fetch-settings";

interface Platform {
	url: string;
	platform: SocialPlatform;
}

interface SettingsContextProps {
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
}

export const useSettings = () => {
	const settings = fetchSettings();

	const SettingsContext = createContext<SettingsContextProps>({
		biography: {
			description: settings?.biography.description,
			title: settings?.biography.description,
			photo:
				settings?.biography.photo &&
				handleSanityImageFixed({
					asset: settings?.biography.photo,
					width: 240,
					height: 240,
				}),
		},
		profile: {
			name: settings?.profile.name,
			knownAs: settings?.profile.knownAs,
			photo:
				settings?.profile.avatar &&
				handleSanityImageFixed({
					asset: settings?.profile.avatar,
					width: 240,
					height: 240,
				}),
			platforms:
				settings?.profile.platforms?.map((platform) => ({
					platform: platform.name,
					url: platform.link,
				})) || [],
		},
	});

	return useContext(SettingsContext);
};
