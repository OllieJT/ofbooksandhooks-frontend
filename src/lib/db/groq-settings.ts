import groq from "groq";
import { Img } from "../schema";
import {
	GroqSanityDocument,
	groqSanityDocument,
	groqSanityPlatform,
	GroqSanityPlatform,
} from "./groq";

export const groqSettings = groq`*[_id == "settings"][0]
	{
		${groqSanityDocument}

		biography{
			title,
			description,
			photo
		},

		profile->{
			avatar,
			knownAs,
			name,
			platforms[]{
				${groqSanityPlatform}
			},
		}
	}
 `;

export interface GroqSettings_Biography {
	title: string;
	description: string;
	photo: Img;
}
export interface GroqSettings_Profile {
	name: string;
	knownAs: string;
	avatar: Img;
	platforms: GroqSanityPlatform[];
	slug: string;
}

export interface GroqSettings extends GroqSanityDocument<"settings"> {
	biography: GroqSettings_Biography;
	profile: GroqSettings_Profile;
}
