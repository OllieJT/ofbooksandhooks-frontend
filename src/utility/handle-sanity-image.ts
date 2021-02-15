import { urlFor } from "../lib/sanity";
import { Img } from "../lib/schema";

type Fit = "clip" | "fill" | "max" | "min";

export type Dimensions = {
	width: number;
	height: number;
};
export interface CustomImage extends Dimensions {
	url: string;
	alt?: string;
	width: number;
	height: number;
}

interface CustomImageOptions extends Dimensions {
	fit?: Fit;
}

/*
	clip:
	The image is resized to fit within the bounds you specified without cropping or distorting the image.

	fill:
	Like clip, but the any free area not covered by your image is filled with the color specified in the bg parameter.

	max:
	Fit the image within the box you specify, but never scaling the image up.

	min:
	Resizes and crops the image to match the aspect ratio of the requested width and height. Will not exceed the original width and height of the image.
 */

export const handleSanityImage = (
	image: Img,
	options: CustomImageOptions,
): CustomImage | undefined => {
	let url: string | null = null;

	if (!!options.height) {
		url = urlFor(image)
			.width(options.width)
			.height(options.height)
			.fit(options.fit || "clip")
			.url();
	} else {
		url = urlFor(image)
			.width(options.width)
			.fit(options.fit || "min")
			.url();
	}

	if (!url) {
		return undefined;
	}

	return {
		url: url,
		width: options.width,
		height: options.height,
		alt: image.alt || "",
	};
};
