import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte"],
	preprocess: [preprocess({})],

	kit: {
		outDir: "./.svelte-kit/",
		adapter: adapter({}),
		vite: {
			json: { namedExports: true },
			resolve: {
				alias: {
					$lib: path.resolve("src/lib"),
					$ui: path.resolve("src/ui"),
				},
			},
		},
	},
};

export default config;
