import { slugify } from "./transform-text";
import {
	RiTwitterFill,
	RiInstagramFill,
	RiYoutubeFill,
	RiFacebookBoxFill,
	RiRedditFill,
	RiDiscordFill,
	RiGlobeFill,
} from "react-icons/ri";

import { FaEtsy, FaPinterest } from "react-icons/fa";

export enum SocialPlatform {
	Twitter = "Twitter",
	Instagram = "Instagram",
	Youtube = "YouTube",
	Facebook = "Facebook",
	Reddit = "Reddit",
	Discord = "Discord",
	Tiktok = "TikTok",
	Etsy = "Etsy",
	Pinterest = "Pinterest",
	Website = "Website",
}

export const allPlatforms = Object.values(SocialPlatform);

export const resolveSocialIcon = (platform: string) => {
	switch (platform) {
		case slugify(SocialPlatform.Twitter):
			return RiTwitterFill;

		case slugify(SocialPlatform.Instagram):
			return RiInstagramFill;

		case slugify(SocialPlatform.Youtube):
			return RiYoutubeFill;

		case slugify(SocialPlatform.Facebook):
			return RiFacebookBoxFill;

		case slugify(SocialPlatform.Reddit):
			return RiRedditFill;

		case slugify(SocialPlatform.Discord):
			return RiDiscordFill;

		case slugify(SocialPlatform.Etsy):
			return FaEtsy;

		case slugify(SocialPlatform.Pinterest):
			return FaPinterest;

		case slugify(SocialPlatform.Tiktok):
		case slugify(SocialPlatform.Website):
		default:
			return RiGlobeFill;
	}
};
