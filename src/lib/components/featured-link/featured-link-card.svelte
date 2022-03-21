<script lang="ts">
	import type { THEME_COLOR } from "@inqling/components/types";

	import FeaturedLinkCardIcon from "./part/featured-link-card-icon.svelte";

	export let icon: ICON | undefined;
	export let theme: THEME_COLOR;
	export let title: string;
	export let description: string;
	export let href: string;
	export let internal: boolean = false;
</script>

<div
	class="group relative rounded-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
>
	<FeaturedLinkCardIcon {icon} {theme} />
	<div class="mt-8">
		<h3
			class="text-lg font-medium decoration-2 group-hover:text-mono-900 group-hover:underline"
		>
			<a {href} target={internal ? undefined : "_blank"} class="focus:outline-none">
				<!-- Extend touch target to entire panel -->
				<span class="absolute inset-0" aria-hidden="true" />
				{title}
			</a>
		</h3>
		<p class="mt-2 text-sm text-mono-500">
			{description}
		</p>
	</div>
	<span
		class="pointer-events-none absolute top-6 right-6 text-mono-300 group-hover:text-mono-400"
		aria-hidden="true"
	>
		<svg
			class="h-6 w-6"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
			/>
		</svg>
	</span>
</div>
