<script lang="ts">
	import CardPartAuthor from "./part/card-part-author.svelte";
	import Badge from "@inqling/components/badge-label/badge-sm.svelte";
	import type { CardAuthor, CardTopic } from "./part/types";
	import CardPartMeta from "./part/card-part-meta.svelte";

	export let href: string;
	export let src: string | undefined;
	export let title: string;
	export let author: CardAuthor | undefined;
	export let date: Date;
	export let duration: string | undefined;
	export let topic: CardTopic;
</script>

<a
	{href}
	class="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-500 ease-out hover:shadow-2xl"
>
	<div class="flex-shrink-0 overflow-hidden">
		<img
			class="h-48 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
			{src}
			alt=""
		/>
	</div>
	<div class="flex flex-1 flex-col justify-between bg-white p-6">
		<div class="flex-1">
			<span class="-ml-2">
				<Badge theme={topic.color}>{topic.name}</Badge>
			</span>

			<div class="mt-2 block">
				<p class="text-xl font-semibold text-mono-900 group-hover:text-primary-600">
					{title}
				</p>
				<p class="mt-3 text-base text-mono-500">
					<slot />
				</p>
			</div>
		</div>
		{#if author}
			<CardPartAuthor name={author.name} avatar={author.avatar} {date} {duration} />
		{:else}
			<CardPartMeta {date} {duration} />
		{/if}
	</div>
</a>
