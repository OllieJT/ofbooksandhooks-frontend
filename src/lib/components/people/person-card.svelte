<script lang="ts">
	import { urlFor } from "$lib/api/sanity/client";

	import type { Person } from "$lib/api/sanity/schema";
	import { colorFromTag } from "$lib/util/color-from-tag";
	import Badge from "@inqling/components/badge-label/badge-sm.svelte";
	import PortableText from "../blocks/portable-text.svelte";
	import Prose from "../container/Prose.svelte";

	export let person: Person;
	const name = [person.nameFirst, person.nameLast].join(" ");
	const avatar = !!person.avatar && urlFor(person.avatar).width(320).height(320).url();
</script>

<div class="space-y-4">
	{#if avatar}
		<div class="aspect-w-3 aspect-h-2">
			<img
				class="rounded-lg object-cover shadow-lg"
				src={avatar}
				width="320"
				height="320"
				alt=""
			/>
		</div>
	{/if}
	<div class="space-y-1 text-lg font-medium leading-6">
		<h3>{name}</h3>
		<p class="text-indigo-600">{person.alias}</p>
		{#if person.tags}
			{#each person.tags as tag}
				<Badge theme={colorFromTag(tag.value)}>{tag.label}</Badge>
			{/each}
		{/if}
	</div>
	{#if person.bio}
		<Prose class="text-lg">
			<PortableText blocks={person.bio} />
		</Prose>
	{/if}

	{#if person.platforms}
		<ul class="flex space-x-5">
			{#each person.platforms as platform}
				<li>
					<a
						href={platform.link}
						target="_blank"
						class="text-mono-400 hover:text-mono-500"
					>
						<span class="sr-only">{platform.name}</span>
						<svg
							class="h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path
								d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
							/>
						</svg>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
