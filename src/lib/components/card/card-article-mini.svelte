<script lang="ts">
	import CardPartAuthor from "./part/card-part-author.svelte";
	import Badge from "@inqling/components/badge-label/badge-lg.svelte";
	import type { CardAuthor, CardTopic } from "./part/types";
	import CardPartMeta from "./part/card-part-meta.svelte";

	export let href: string;
	export let title: string;
	export let author: CardAuthor | undefined;
	export let date: Date;
	export let duration: string | undefined;
	export let topic: CardTopic;
</script>

<a
	{href}
	class="group flex max-w-full flex-col self-stretch rounded-lg border border-transparent p-6 hover:border-mono-200"
>
	<div class="mb-4">
		<Badge theme={topic.color}>{topic.name}</Badge>
	</div>
	<p class="text-xl font-semibold text-mono-900 group-hover:text-primary-600">{title}</p>
	<p class="mt-3 grow text-base text-mono-500">
		<slot />
	</p>
	{#if author}
		<CardPartAuthor name={author.name} avatar={author.avatar} {date} {duration} />
	{:else}
		<CardPartMeta {date} {duration} />
	{/if}
</a>
