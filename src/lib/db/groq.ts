import groq from "groq";

export const groqSanityDocument = groq`
	_id,
	_createdAt,
	_rev,
	_type,
	_updatedAt,
 `;

export interface GroqSanityDocument<Type = string> {
	_id: string;
	_type: Type;
	_createdAt: string;
	_rev: string;
	_updatedAt: string;
}

export const groqSanityPlatform = groq`
	_key,
	_type,
	link,
	name,
 `;
export interface GroqSanityPlatform {
	_key: string;
	_type: "platform";
	link: string;
	name:
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
}
