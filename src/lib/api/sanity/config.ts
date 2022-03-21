import type { ClientConfig } from "@sanity/client";

export const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
export const useCdn = import.meta.env.PROD;
export const token = import.meta.env.SANITY_API_TOKEN;
export const apiVersion = "2022-03-20";

export const sanityConfig: ClientConfig = {
	dataset,
	projectId,
	useCdn,
	apiVersion,
	withCredentials: true,
};
