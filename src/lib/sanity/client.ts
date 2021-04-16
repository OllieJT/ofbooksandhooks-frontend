import {
	createImageUrlBuilder,
	createPreviewSubscriptionHook,
	createCurrentUserHook,
} from "next-sanity";
import { Img } from "../groq/models";
import { sanityConfig } from "./config";

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const imageBuilder = createImageUrlBuilder(sanityConfig);
export const urlFor = (source: Img) => imageBuilder.image(source).auto("format");

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook({
	...sanityConfig,
	documentLimit: 3000,
});

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(sanityConfig);
