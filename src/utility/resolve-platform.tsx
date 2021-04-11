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

export type SocialPlatform =
	| "twitter"
	| "instagram"
	| "youtube"
	| "facebook"
	| "reddit"
	| "discord"
	| "tiktok"
	| "etsy"
	| "pinterest"
	| "website";

/* export enum SocialPlatform {
	Twitter = "twitter",
	Instagram = "instagram",
	Youtube = "youtube",
	Facebook = "facebook",
	Reddit = "reddit",
	Discord = "discord",
	Tiktok = "tiktok",
	Etsy = "etsy",
	Pinterest = "pinterest",
	Website = "website",
} */

export const allPlatforms = [
	"twitter",
	"instagram",
	"youtube",
	"facebook",
	"reddit",
	"discord",
	"tiktok",
	"etsy",
	"pinterest",
	"website",
];

export const resolveSocialIcon = (platform: string) => {
	console.log({ platform });
	switch (platform) {
		case slugify("twitter"):
			return RiTwitterFill;

		case slugify("instagram"):
			return RiInstagramFill;

		case slugify("youtube"):
			return RiYoutubeFill;

		case slugify("facebook"):
			return RiFacebookBoxFill;

		case slugify("reddit"):
			return RiRedditFill;

		case slugify("discord"):
			return RiDiscordFill;

		case slugify("etsy"):
			return FaEtsy;

		case slugify("pinterest"):
			return FaPinterest;

		case slugify("tiktok"):
		case slugify("website"):
		default:
			return RiGlobeFill;
	}
};
