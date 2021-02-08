declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			NEXT_PUBLIC_SANITY_DATASET: string;
			NEXT_PUBLIC_SANITY_PROJECT_ID: string;
			SANITY_PREVIEW_SECRET: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
