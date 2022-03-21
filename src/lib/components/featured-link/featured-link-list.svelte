<script lang="ts">
	import FeaturedLinkCard from "./featured-link-card.svelte";
	import type { FeaturedLink } from "./part/types";

	export let links: FeaturedLink[];
</script>

<div
	class="divide-y divide-mono-200 overflow-hidden rounded-lg border border-mono-200 bg-mono-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
>
	{#each links as link}
		<FeaturedLinkCard
			icon={link.icon}
			theme={link.theme}
			title={link.title}
			description={link.description}
			href={link.href}
			internal={link.internal}
		/>
	{/each}
</div>
