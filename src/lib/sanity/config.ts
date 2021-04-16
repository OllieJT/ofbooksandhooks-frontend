import { ClientConfig } from "next-sanity";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const useCdn = process.env.NODE_ENV === "production";
export const token = process.env.SANITY_API_TOKEN;
export const apiVersion = undefined; // "2021-04-12"

export const sanityConfig: ClientConfig = {
	dataset,
	projectId,
	useCdn,
	apiVersion,
};
