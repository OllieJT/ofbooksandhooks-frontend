import { urlFor } from "../lib/sanity";
import { SanityAsset } from "../lib/schema";

export interface CustomImage {
	url: string;
	width: number;
	height: number | null;
	alt?: string;
}

export interface CustomImageOptions {
	width: number;
	height: number;
	alt?: string;
	fluid?: boolean;
}

export const handleSanityImage = (
	asset: SanityAsset,
	options: CustomImageOptions,
): CustomImage | undefined => {
	const imgUrlFixed =
		asset &&
		urlFor(asset).auto("format").width(options.width).height(options.height).url();
	const imgUrlFluid =
		asset &&
		urlFor(asset)
			.auto("format")
			.maxWidth(options.width)
			.maxHeight(options.height)
			.url();

	if (!imgUrlFixed || !imgUrlFluid) {
		return undefined;
	}

	if (options.fluid) {
		return {
			url: imgUrlFluid,
			width: options.width,
			height: null,
			alt: options.alt || "",
		};
	}

	return {
		url: imgUrlFixed,
		width: options.width,
		height: options.height,
		alt: options.alt || "",
	};
};
