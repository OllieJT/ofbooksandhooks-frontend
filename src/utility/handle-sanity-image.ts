import { urlFor } from "../lib/sanity";
import { SanityAsset } from "../lib/schema";

export interface CustomImage {
	url: string;
	width: number;
	height: number;
	alt?: string;
}

export interface CustomImageOptions {
	width: number;
	height: number;
	alt?: string;
}

export const handleSanityImage = (
	asset: SanityAsset,
	options: CustomImageOptions,
): CustomImage | undefined => {
	const imgUrl =
		asset &&
		urlFor(asset).auto("format").width(options.width).height(options.height).url();

	if (!imgUrl) {
		return undefined;
	}

	return {
		url: imgUrl,
		width: options.width,
		height: options.height,
		alt: options.alt,
	};
};
