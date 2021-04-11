import { urlFor } from "../lib/sanity";
import { Img } from "../lib/schema";

export enum ImageFit {
	Clip = "clip",
	Fill = "fill",
	Max = "max",
	Min = "min",
}

export type ImageDimensions = {
	width: number;
	height: number;
}; /*
interface CustomImage extends ImageDimensions {
	url: string;
	alt?: string;
}

interface CustomImageOptions extends ImageDimensions {
	fit?: ImageFit;
} */

export interface FluidImage {
	url: string;
	alt?: string;
	fit?: ImageFit;
}
export interface FixedImage extends ImageDimensions {
	url: string;
	alt?: string;
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

/* export const handleSanityImage = (
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
}; */

interface SanityImageFixedProps extends ImageDimensions {
	asset: Img;
	fit?: ImageFit;
	alt?: string;
	width: number;
	height: number;
}

export const handleSanityImageFixed = ({
	asset,
	width,
	alt,
	height,
	fit = ImageFit.Clip,
}: SanityImageFixedProps): FixedImage => {
	const url = urlFor(asset).width(width).height(height).fit(fit).url();

	return {
		url: url || "",
		alt: alt || asset.alt,
		width,
		height,
	};
};

interface SanityImageFluidProps {
	asset: Img;
	fit?: ImageFit;
	alt?: string;
	maxWidth?: number;
	maxHeight?: number;
}
interface SanityImageFluidProps_mWidth extends SanityImageFluidProps {
	maxWidth?: number;
	maxHeight: never;
}
interface SanityImageFluidProps_mHeight extends SanityImageFluidProps {
	maxWidth: never;
	maxHeight?: number;
}

export const handleSanityImageFluid = ({
	asset,
	fit = ImageFit.Min,
	alt,
	maxWidth,
	maxHeight,
}:
	| SanityImageFluidProps
	| SanityImageFluidProps_mWidth
	| SanityImageFluidProps_mHeight): FluidImage => {
	if (!asset) {
		console.warn("No asset was passed to handleSanityImageFluid()");
	}

	let url: string | null = "";
	if (maxWidth) {
		url = urlFor(asset).maxWidth(maxWidth).fit(fit).url();
	} else if (maxHeight) {
		url = urlFor(asset).maxHeight(maxHeight).fit(fit).url();
	} else {
		url = urlFor(asset).fit(fit).url();
	}

	return {
		url: url || "",
		alt: alt || asset?.alt,
		fit,
	};
};
