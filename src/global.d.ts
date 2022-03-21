/// <reference types="@sveltejs/kit" />

/*

	Example adding global type:

	interface Fathom {
		trackGoal: (event: string, value: number) => void;
	}
	declare const fathom: Fathom;

*/

interface ImportMetaEnv {
	readonly VITE_SANITY_DATASET: string;
	readonly VITE_SANITY_PROJECT_ID: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}
