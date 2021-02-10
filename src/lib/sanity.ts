import {
	createImageUrlBuilder,
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from "next-sanity";
import { SanityAsset } from "./schema";
import { sanityConfig } from "./sanity-config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const imageBuilder = createImageUrlBuilder(sanityConfig);
export const urlFor = (source: SanityAsset) =>
	imageBuilder.image(source).auto("format").fit("max");

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook({
	...sanityConfig,
	documentLimit: 3000,
});

console.log(sanityConfig);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(sanityConfig);
