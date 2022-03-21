import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./config";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient(sanityConfig);

export const imageBuilder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
	// Read more: https://www.sanity.io/docs/image-url
	return imageBuilder.image(source).auto("format");
}
