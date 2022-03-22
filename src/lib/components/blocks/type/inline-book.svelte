<script lang="ts">
	import type { BlockProps } from "@portabletext/svelte";
	import type { InlineBook } from "$lib/api/sanity/schema";
	import Badge from "@inqling/components/badge-label/badge-sm.svelte";
	import ArrowRight from "@inqling/svelte-icons/outline/arrow-sm-right.svelte";

	import { urlFor } from "$lib/api/sanity/client";
	import PortableText from "../portable-text.svelte";

	export let portableText: BlockProps<InlineBook>;
	$: book = portableText.block;
	$: src = urlFor(book.cover).width(320).height(480).url();
	$: authors = book.authors.join(", ");
	$: narrators = book.narrators?.join(", ");
</script>

<section class="grid-cols-3 gap-x-6 gap-y-3 sm:grid lg:gap-x-10">
	<header class="col-span-2 col-start-2 row-start-1 py-4">
		<h4 class="my-2 text-2xl font-semibold text-mono-900">{book.title}</h4>
		<p class="my-2">
			<span class="text-2xl text-mono-700">{book.subtitle}</span>
			<span class="text-lg text-mono-500">By {authors}</span>
			{#if narrators}
				<span class="text-lg text-mono-500">Narrated by {authors}</span>
			{/if}
		</p>
		<div class="flex flex-wrap items-center gap-1">
			<Badge theme="primary">{book.genre.type}</Badge>
			<Badge theme="secondary">{book.genre.category}</Badge>
		</div>
	</header>
	{#if book.content}
		<div class="col-span-2 col-start-2 row-span-2 row-start-2">
			<PortableText blocks={book.content} />
		</div>
	{/if}
	<aside class="col-span-1 col-start-1 row-span-2 row-start-1">
		<img
			{src}
			width="320"
			height="480"
			alt="Cover for {book.title} by {authors}"
			class="m-auto rounded-2xl"
		/>
		<Badge theme="mono">{book.type}</Badge>
		{#if book.cta}
			<a href={book.cta.url} target="_blank" class="text-sm font-semibold">
				{book.cta.label}<ArrowRight class="h-4 w-4" />
			</a>
		{/if}
	</aside>
</section>
